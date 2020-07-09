import * as React from "react"
import * as API from "../../blockchain/EthereumAPI"
import ContractInstances from '../../blockchain/ContractInstances'
import { createContext, useState, useEffect, useCallback } from "react"
interface blockchainProps {
    metamaskConnections: API.ethersMetamask
    contracts: ContractInstances
    account: string
}

type Status = 'Metamask Missing' | 'window.ethereum not found' | 'Application not connected to Metamask' | 'window.ethereum injected by Metmask' | 'Successfully connected to Metmask'

interface ethereumContextProps {
    blockchain?: blockchainProps
    connectionStatus: Status
    network: string
    requestConnection: () => void
}

let EthereumContext = createContext<ethereumContextProps>({
    connectionStatus: 'Metamask Missing',
    network: '',
    requestConnection: () => console.log('unitialized')
})

const networkNameMapper = (id: number): string => {
    switch (id) {
        case 1: return "main"
        case 2: return "morden"
        case 3: return "ropsten"
        case 4: return "rinkeby"
        case 5: return "goerli"
        case 42: return "kovan"
        case 66: return "private"
        default: return "private"
    }
}

interface providerProps {
    children: any
    window: any
}

function EthereumContextProvider(props: providerProps) {
    const [metamask, setMetamask] = useState<API.ethersMetamask | undefined>(undefined)
    const [connectionStatus, setConnectionStatus] = useState<Status>('Metamask Missing')
    const [chainId, setChainId] = useState<number>(0)
    const [network, setNetwork] = useState<string>("")
    const [injectedEthereum, setInjectedEthereum] = useState<API.injectedEthereum | undefined>(undefined)
    const [requestConnection, setRequestConnection] = useState<boolean>(false)
    const [contractInstances, setContractInstances] = useState<ContractInstances | undefined>(undefined)
    const [account, setAccount] = useState<string>("")

    const chainChangeCallBack = useCallback(async () => {
        const result = API.GetEthereum(props.window)
        if (result.ethereum) {
            setInjectedEthereum(result.ethereum)
            const ethers = API.GetEthers(result.ethereum)
            result.ethereum.on('accountsChanged', (response) => setAccount(response[0]))
            if (connectionStatus == 'Successfully connected to Metmask') {
                await result.ethereum.enable()
                setContractInstances(await API.GetContracts(ethers.signer, network))


            } else
                setConnectionStatus('window.ethereum injected by Metmask')

            setMetamask(ethers)
            const newChainId = await ethers.signer.getChainId()
            setChainId(newChainId)
            setNetwork(networkNameMapper(newChainId))


        } else {
            let status: Status | undefined
            switch (result.message) {
                case 'Metamask not present':
                    status = 'Metamask Missing'
                    break;
                case 'Ethereum not injected into browser':
                    status = 'window.ethereum not found'
                    break;
                case 'Metamask not present':
                    status = 'Metamask Missing'
                default:
                    status = undefined
            }
            if (status)
                setConnectionStatus(status)
        }
    }, [chainId, account])

    useEffect(() => {
        chainChangeCallBack()
    }, [chainId, account])

    const requestConnectionCallback = useCallback(async () => {
        if (requestConnection && injectedEthereum) {
            await injectedEthereum.enable()
            setConnectionStatus('Successfully connected to Metmask')
            injectedEthereum.on('chainChanged', response => {
                let chainString = response.result
                if (API.isHex(chainString)) {
                    chainString = API.hexToNumString(chainString)
                }
                const chainIDnum = parseInt(chainString)
                setChainId(chainIDnum)
                setNetwork(networkNameMapper(chainIDnum))
            })
            if (!metamask) {
                setMetamask(API.GetEthers(injectedEthereum))
            }
            if (metamask && metamask.signer) {
                setContractInstances(await API.GetContracts(metamask.signer, network))
                setAccount(await metamask.signer.getAddress())
            }


        }
        setRequestConnection(false)
    }, [requestConnection])

    useEffect(() => {
        requestConnectionCallback()
    }, [requestConnection])

    let blockchain: (blockchainProps | undefined)
    if (contractInstances && metamask) {
        blockchain = { contracts: contractInstances, metamaskConnections: metamask, account }
    }
    let contextProps: ethereumContextProps = {
        blockchain,
        connectionStatus,
        network,
        requestConnection: () => setRequestConnection(true)
    }
    EthereumContext = createContext<ethereumContextProps>(contextProps)

    return <EthereumContext.Provider value={contextProps}>{props.children}</EthereumContext.Provider>
}


export { EthereumContext, EthereumContextProvider }