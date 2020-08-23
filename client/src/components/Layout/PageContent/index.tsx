import React, { useContext, useCallback, useEffect } from 'react';
import {
    Route, Switch, Redirect, useLocation
} from 'react-router-dom'

import WalletNotConnected from './WalletNotConnected'
import { makeStyles, createStyles } from '@material-ui/core'
import { useState } from 'react'
import { EthereumContext } from 'src/components/contexts/EthereumContext';
import { Loading } from './Common/index'
import Staking from './Staking/index'

const delayDuration = '300ms'
const delayFunction = 'ease'

const useStyles = makeStyles(them => createStyles({
    expanded: {
        marginLeft: "200px",
        transitionProperty: "margin",
        transitionDuration: delayDuration,
        transitionTimingFunction: delayFunction,
    },
    shrunk: {
        marginLeft: "50px",
        transitionProperty: "margin",
        transitionDuration: delayDuration,
        transitionTimingFunction: delayFunction
    }
}))

interface props {
    expanded: boolean
    isAdmin: boolean
    loading: boolean
}

export default function PageContent(props: props) {
    const ethereumContext = useContext(EthereumContext)
    const classes = useStyles()
    const [redirection, setRedirection] = useState<string>("")

    const location = useLocation()

    const hasDepositsCallback = useCallback(async () => {
        if (ethereumContext.blockchain && location.pathname == '/') {
            const blockchain = ethereumContext.blockchain
            const userGlobalData = await blockchain.contracts.LendingPoolDataProvider.calculateUserGlobalData(blockchain.account)
            if (!userGlobalData.totalCollateralBalanceETH.isZero()) {
                setRedirection('/deposit')
            }
        }
    }, [ethereumContext.blockchain])

    useEffect(() => {
        hasDepositsCallback()
    }, [ethereumContext.blockchain])

    const renderRedirect = redirection !== '' ? <Redirect to={redirection} /> : ''

    React.useEffect(() => {
        if (renderRedirect !== '') {
            setRedirection('')
        }
    })

    const RenderCorrect = (bigprops: any) => {
        if (ethereumContext.connectionStatus === 'window.ethereum injected by Metmask')
            return <Loading />
        if (ethereumContext.connectionStatus === 'Metamask Missing' || ethereumContext.connectionStatus === 'window.ethereum not found')
            return <WalletNotConnected />

        return <div>
            {renderRedirect}
            <Switch>
                <Route path='/'>
                    <Staking />
                </Route>
                <Route path='/staking' exact>
                    <Staking />
                </Route>
            </Switch>
        </div>
    }

    return <div className={props.expanded ? classes.expanded : classes.shrunk}>
        <RenderCorrect />
    </div >
}

