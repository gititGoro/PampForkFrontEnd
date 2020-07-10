import * as React from "react"
import { useContext, useState, useEffect, useCallback } from 'react'
import { EthereumContext } from "../../contexts/EthereumContext"
import { Grid, Typography, TextField, Button, Paper, makeStyles } from "@material-ui/core"
import BigNumber from "bignumber.js"
import { hexToNumString } from "../../../blockchain/EthereumAPI"
interface props {
    contractName: string
    function: string
}
interface JsonFragmentType {
    name?: string;
    indexed?: boolean;
    type?: string;
    components?: Array<JsonFragmentType>;
}
declare class ParamType {
    readonly name: string;
    readonly type: string;
    readonly baseType: string;
    readonly indexed: boolean;
    readonly components: Array<ParamType>;
    readonly arrayLength: number;
    readonly arrayChildren: ParamType;
    readonly _isParamType: boolean;
    constructor(constructorGuard: any, params: any);
    format(format?: string): string;
    static from(value: string | JsonFragmentType | ParamType, allowIndexed?: boolean): ParamType;
    static fromObject(value: JsonFragmentType | ParamType): ParamType;
    static fromString(value: string, allowIndexed?: boolean): ParamType;
    static isParamType(value: any): value is ParamType;
}
export interface TransactionReceipt {
    to: string;
    from: string;
    contractAddress: string;
    transactionIndex: number;
    root?: string;
    gasUsed: BigNumber;
    logsBloom: string;
    blockHash: string;
    transactionHash: string;
    logs: Array<any>;
    blockNumber: number;
    confirmations: number;
    cumulativeGasUsed: BigNumber;
    byzantium: boolean;
    status?: number;
}

export interface ContractReceipt extends TransactionReceipt {
    events?: Array<Event>;
}

export interface Transaction {
    hash?: string;
    to?: string;
    from?: string;
    nonce: number;
    gasLimit: BigNumber;
    gasPrice: BigNumber;
    data: string;
    value: BigNumber;
    chainId: number;
    r?: string;
    s?: string;
    v?: number;
}

interface TransactionResponse extends Transaction {
    hash: string;
    blockNumber?: number;
    blockHash?: string;
    timestamp?: number;
    confirmations: number;
    from: string;
    raw?: string;
    wait: (confirmations?: number) => Promise<TransactionReceipt>;
}

interface ContractTransaction extends TransactionResponse {
    wait(confirmations?: number): Promise<ContractReceipt>;
}

type mutabilityOptions = 'payable' | 'nonpayable' | 'view'

const useStyles = makeStyles({
    paper: {
        background: 'rgba(0,0,0,0.2)',

        flexGrow: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        fontSize: "18px",
        fontWeight: "bold",
    }
});

export default function ControlsForFunction(props: props) {
    const classes = useStyles()
    const ethereumContextProps = useContext(EthereumContext)
    if (!ethereumContextProps.blockchain)
        return <div></div>
    const contract = ethereumContextProps.blockchain.contracts[props.contractName]
    if (!contract)
        throw "contract failed to find: " + props.contractName

    const func = contract.interface.functions[props.function]
    if (!func)
        throw "function failed to find: " + props.function //no signature

    const inputs = func.inputs as Array<ParamType> | undefined
    const mutability = ethereumContextProps.blockchain.contracts[props.contractName].interface.functions[props.function].stateMutability as mutabilityOptions
    const outputs = ethereumContextProps.blockchain.contracts[props.contractName].interface.functions[props.function].outputs as ParamType[] | undefined

    const [inputsText, setInputsText] = useState<string[] | undefined>(inputs ? new Array<string>(inputs.length) : undefined)
    const [outputText, setOutputText] = useState<string>("")
    const [awaitingWalletConfirmation, setAwaitingWalletConfirmation] = useState<boolean>(false)
    const [error, setError] = useState<string>("")
    const [awaitingBlockchainConfirmation, setAwaitingBlockchainConfirmation] = useState<boolean>(false)

    const setInput = (v: string, index: number) => {
        if (inputsText) {
            inputsText[index] = v
            // let current = [...inputsText]
            // current[index] = v
            // setInputsText(current)
            setInputsText(inputsText)
        }
    }
    const functionName: string = props.function.substring(0, props.function.indexOf('(')).trim()


    const action = ethereumContextProps.blockchain.contracts[props.contractName][functionName]//presumable returns a promise when reflet.apply


    return <Paper className={classes.paper}><Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        spacing={3}  >
        <Grid item>
            <Typography variant="h6">Function: {functionName}, mutability: {mutability}</Typography>
        </Grid>
        {inputs && inputsText ?
            < Grid item>
                <AppropriateInput args={inputs} setInput={setInput} inputs={inputsText} />
            </Grid>
            : ""}
        <Grid item>
            <AppropriateAction
                mutability={mutability}
                action={action}
                inputs={inputsText}
                setOutput={setOutputText}
                setAwaitingBlockchainConfirmation={setAwaitingBlockchainConfirmation}
                setAwaitingWalletConfirmation={setAwaitingWalletConfirmation}
                setError={setError}
            />
        </Grid>
        {
            mutability === 'view' && outputs ? <Grid item>
                {outputText}
            </Grid> : <Grid item>
                    {awaitingWalletConfirmation ? "waiting for user to confirm transaction" : (awaitingBlockchainConfirmation ? "waiting for transaction to confirm" : (error !== '' ? "error in execution:" + error : ''))}
                </Grid>
        }
    </Grid >
    </Paper>
}

interface appropriateInputProps {
    args: ParamType[]
    setInput: (v: string, index: number) => void
    inputs: string[]
}

const inputStyles = makeStyles({
    text: {
        margin: "10px",
        width:"400px"
    }
})

function AppropriateInput(props: appropriateInputProps) {
    const classes = inputStyles()
    const columns = props.args
        .filter(arg => arg._isParamType)
        .map((arg, i) => (
            <Grid item key={'app' + arg.name + i}>
                <TextField className={classes.text} label={arg.name} type="text" variant="outlined" value={props.inputs[i]}
                    onChange={(event) => { props.setInput(event.target.value, i) }} autoComplete={arg.name} />
            </Grid>
        ))


    return <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
    >
        {columns}
    </Grid>
}

interface appropriateActionProps {
    mutability: mutabilityOptions
    action: any
    inputs: string[] | undefined
    setOutput: (o: string) => void
    setAwaitingWalletConfirmation: (w: boolean) => void
    setAwaitingBlockchainConfirmation: (b: boolean) => void
    setError: (err: string) => void
}


function AppropriateAction(props: appropriateActionProps) {
    const [viewPromise, setViewPromise] = useState<Promise<any> | undefined>()
    const [transactionPromise, setTransactionPromise] = useState<Promise<ContractTransaction> | undefined>()
    const [transaction, setTransaction] = useState<ContractTransaction | undefined>()
    const [click, setClick] = useState<boolean>(false)

    useEffect(() => {
        if (!click)
            return
        if (click) {
            if (props.mutability === 'view') {
                setViewPromise(Reflect.apply(props.action, undefined, props.inputs || []))
            } else {
                setTransactionPromise(Reflect.apply(props.action, undefined, props.inputs || []))
            }
            setClick(false)
        }
    }, [click])

    const viewCallBack = useCallback(async () => {
        if (viewPromise) {
            try {
                const output = await viewPromise
                console.log('trying to execute')
                if (output) {
                    if (output._isBigNumber) {
                        props.setOutput(hexToNumString(output._hex))
                    } else
                        props.setOutput(JSON.stringify(output))
                }
                props.setError('')
            } catch (err) {
                props.setError(err)
            }
            setViewPromise(undefined)
        }
    }, [viewPromise])

    useEffect(() => {
        viewCallBack()
    }, [viewPromise])

    const walletRequestcallBack = useCallback(async () => {
        if (transactionPromise) {
            props.setAwaitingWalletConfirmation(true)
            try {
                const transaction = await transactionPromise
                props.setAwaitingBlockchainConfirmation(true)
                setTransaction(transaction)
                props.setError('')
            } catch (err) {
                props.setError(err)
            }
            props.setAwaitingWalletConfirmation(false)

            setTransactionPromise(undefined)
        }
    }, [transactionPromise])

    const transactionAwaitCallBack = useCallback(async () => {
        if (transaction) {
            await transaction
            props.setAwaitingBlockchainConfirmation(false)
            setTransaction(undefined)
        }
    }, [transaction])

    useEffect(() => {
        walletRequestcallBack()
    }, [transactionPromise])

    useEffect(() => {
        transactionAwaitCallBack()
    }, [transaction])

    return <Button variant="contained" color="primary" onClick={() => setClick(true)}>
        Invoke
    </Button>

}