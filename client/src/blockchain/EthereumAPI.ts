import { ethers, BigNumber as ethersBigNumber } from "ethers"
import ContractInstances from "./ContractInstances"
import *  as contracts from './typechain-types/ethers'
import addresses from './deployedAddresses.json'
import BigNumber from "bignumber.js"

// const RAY = new BigNumber(10).pow(27)
const WAD = new BigNumber(10).pow(18)
const RAYstring = '1000000000000000000000000000'
// const RAYWADDIFF = '1000000000'
const WADstring = WAD.toString()
export const  UINTMAX = '115792089237316195423570985008687907853269984665640564039457584007913129639933'

declare global {
    interface String {
        fromRAY(): string
        fromWAD(): string
        asPercentage(): string
        truncBig(): string
        dropDecimals(): string
    }
}

function fixedPoint(precisionString: string) {
    return function () {
        //@ts-ignore
        const big = new BigNumber(this.toString())

        if (big.isNaN())
            return ""

        return big.div(precisionString).toString();
    }
}

String.prototype.fromRAY = fixedPoint(RAYstring)
String.prototype.fromWAD = fixedPoint(WADstring)
String.prototype.asPercentage = function () {
    const big = new BigNumber(this.toString())
    if (big.isNaN())
        throw "percentages only apply to numbers"

    return `${big.times(100)}%`
}
String.prototype.truncBig = function (): string {
    const big = new BigNumber(this.toString())
    return big.isNaN() ? this.toString() : big.decimalPlaces(4).toString()
}
String.prototype.dropDecimals = function (): string {
    if (this.indexOf('.'))
        return this.substring(0, this.indexOf('.'))
    return this.toString()
}

export const hexToNumString = (hex: string) => new BigNumber(hex).toString()
export const numToHex = (num: string) => ethers.utils.hexValue(num)
export const isHex = (value: string) => ethers.utils.isHexString(value)
export const weiToEth = (value: string) => ethers.utils.formatEther(value.toString())
export const ethToWei = (value: string): string => (
    new BigNumber(value)
        .times(WAD)
        .decimalPlaces(0)
        .toPrecision(50, BigNumber.ROUND_DOWN)
        .toString()
        .dropDecimals()
)

export const bigNumberize = (num: ethersBigNumber | string) => new BigNumber(num.toString())

export const weiToEthString = (value: ethersBigNumber | string) => weiToEth(value.toString()).toString()

export const WadMul = (lhs: ethersBigNumber, rhs: ethersBigNumber) => {
    return lhs.mul(rhs).div(WAD.toString())
}

export interface ethersMetamask {
    provider: ethers.providers.Web3Provider,
    signer: ethers.Signer
}

type ethereumSendArguments = 'eth_accounts' | 'eth_chainId' | 'eth_requestAccounts' | 'disconnect'
type ethereumOnArguments = 'accountsChanged' | 'chainChanged'

interface requestParams {
    method: ethereumSendArguments
}

export interface injectedEthereum {
    send: (args: ethereumSendArguments) => Promise<any>
    on: (args: ethereumOnArguments, callback: (response: any) => any) => void
    isMetaMask: boolean
    request: (arg: requestParams) => Promise<any>
    enable: () => Promise<void>
}

type ethereumResult = 'Ethereum not injected into browser' | 'Metamask not present' | 'Ethereum found'

interface fetchEthereumResult {
    message: ethereumResult
    ethereum?: injectedEthereum
}

export function GetEthereum(window: any): fetchEthereumResult {
    let result: fetchEthereumResult = {
        message: 'Ethereum not injected into browser'
    }

    if (!window.ethereum)
        return result

    if (!window.ethereum.isMetaMask) {
        result.message = 'Metamask not present'
        return result;
    }

    result.message = 'Ethereum found'
    result.ethereum = window.ethereum
    return result
}

export function GetEthers(ethereum: injectedEthereum): ethersMetamask {
    const provider = new ethers.providers.Web3Provider(ethereum as any)
    const signer = provider.getSigner()
    return {
        provider, signer
    }
}


export async function GetContracts(signer: ethers.Signer, network: string): Promise<ContractInstances | undefined> {
    if (Object.keys(addresses).filter(key => key === network).length === 0)
        return

    let Token = new contracts.PampTokenFactory(signer).attach(addresses[network]["PampToken"])
    let Stake = new contracts.PampStakingFactory(signer).attach(addresses[network]["Stake"])

    return {
        Token,
        Stake
    }
}

export enum Role {
    addressesProviderOwner,
    lendingPoolManager,
    superAdmin,
    user
}

export type BlockchainTransaction = ethers.ContractTransaction
export type BlockchainReceipt = ethers.ContractReceipt