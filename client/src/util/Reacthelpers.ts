import { useEffect, useCallback, useContext } from 'react';
import {BlockchainProps, EthereumContext} from '../components/contexts/EthereumContext'

export const useEffectiveCallback = (f:()=>Promise<void>, watch:any[])=>{
    const callback = useCallback(async()=>await f(),watch)
    useEffect(()=>{
        callback()
    },watch)
}

export const blockchainCallback = (f:(blockchain:BlockchainProps)=>Promise<void>,watch?:any[])=>{
    const ethereumContextProps = useContext(EthereumContext)
    const watchProps = [...watch||[],ethereumContextProps.blockchain]
    const callback = useCallback(async()=>{
        if(ethereumContextProps.blockchain){
            await f(ethereumContextProps.blockchain)
        }
    },watchProps)
    useEffect(()=>{callback()},watchProps)
}