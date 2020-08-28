import React, { useState, useContext, useCallback, useEffect } from 'react';
import PageContent from './PageContent/index'
import LeftPanel from './LeftPanel/index'
import BottomPanel, { brightMode } from './BottomPanel'
import { BrowserRouter } from 'react-router-dom'
import { EthereumContext } from '../contexts/EthereumContext'
import { makeStyles, createStyles, Theme } from '@material-ui/core';
interface props {
    setBrightMode: (mode: brightMode) => void
    brightMode: brightMode
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        overflowX: "hidden",
        overflowY: "hidden"
    }
}))

export default function Layout(props: props) {
    const classes = useStyles()
    const ethereumContextProps = useContext(EthereumContext)
    const [expandLeftPanel, setExpandLeftPanel] = useState<boolean>(true)
    const [isAdmin, setIsAdmin] = useState<boolean>(false)

    const adminCallBack = useCallback(async () => {
        if (ethereumContextProps.blockchain) {
            const owner = await ethereumContextProps.blockchain.contracts.Stake.owner()
            setIsAdmin(owner.toLowerCase() === ethereumContextProps.blockchain.account.toLowerCase())
        } else
            setIsAdmin(false)
    }, [ethereumContextProps.blockchain?.account, ethereumContextProps.network, ethereumContextProps.connectionStatus])

    useEffect(() => {
        adminCallBack()
    })
    return <div className={classes.root}>
        <BrowserRouter>
            <LeftPanel expanded={expandLeftPanel} setExpanded={setExpandLeftPanel} isAdmin={isAdmin} />
            <BottomPanel brightMode={props.brightMode} setBrightMode={props.setBrightMode} />
            <PageContent expanded={expandLeftPanel} isAdmin={isAdmin} loading={ethereumContextProps.connectionStatus !== 'Successfully connected to Metmask'} />
        </BrowserRouter>
    </div>
}