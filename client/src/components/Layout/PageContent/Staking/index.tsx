import React, { useState } from 'react';
import {
    makeStyles,
    createStyles,
    Grid,
    Divider,
    Container,
    Table,
    TableHead,
    TableRow, TableBody,
    TableContainer,
    TableCell,
    Card,
    Button,
    Tooltip
} from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PanToolIcon from '@material-ui/icons/PanTool';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TodayIcon from '@material-ui/icons/Today';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { BlockchainProps } from 'src/components/contexts/EthereumContext';
import { blockchainCallback } from '../../../../util/Reacthelpers'
import { BigNumber } from 'bignumber.js';

const useStyles = makeStyles(theme => createStyles({
    root: {
        display: 'flex',
        padding: '20px',
        color: theme.foregroundColor[theme.palette.type],
        margin: 20
    },
    cell: {
    }
}))

interface props {

}

export default function Staking(props: props) {
    const [balance, setBalance] = useState<string>("")
    const [totalSupply, setTotalSupply] = useState<string>("")
    const [unclaimedRewards, setUnclaimedRewards] = useState<string>("")
    const unclaimedBig = new BigNumber(unclaimedRewards)
    const rewardsToClaim = !unclaimedBig.isNaN() && unclaimedBig.gt(0)
    const classes = useStyles()
    return <div className={classes.root}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={10}
        >
            <Grid item>
                <TokenSummary />
            </Grid>
            <Grid item className={classes.cell}>
                <NetworkStatistics />
            </Grid>
            <Grid item>
                <MyStatistics unclaimedRewards={unclaimedRewards} setUnclaimedRewards={setUnclaimedRewards} totalSupply={totalSupply} setTotalSupply={setTotalSupply} balance={balance} setBalance={setBalance} />
            </Grid>
            <Grid item>
                <ActionPanel rewardsToClaim={rewardsToClaim} />
            </Grid>
        </Grid>
    </div>
}

const tokenSummaryStyles = makeStyles(theme => createStyles({
    root: { border: '1px solid grey' },
    bold: {
        fontWeight: 'bold'
    },
    tableBorder: {
        minWidth: 600
    },
    cell: {
        color: theme.foregroundColor[theme.palette.type],
        border: 'none'
    },
    divider: {
        backgroundColor: 'grey',
        margin: '4px 10px 4px 10px'
    },
    container: {
        width: '100%',
        textAlign: 'center'
    }
}))


const getDuration = (now: number, then: number): string => {
    const minute = 60
    const hour = 60 * minute
    const day = 24 * hour
    const week = 7 * day
    const year = 52 * week

    const duration = now - then
    let timeSuffix = 'second'
    let divisor = 1
    if (duration >= year) {
        timeSuffix = 'year'
        divisor = year
    } else if (duration >= week) {
        timeSuffix = 'week'
        divisor = week
    } else if (duration >= day) {
        timeSuffix = 'day'
        divisor = day
    } else if (duration >= hour) {
        timeSuffix = 'hour'
        divisor = hour
    } else if (duration >= minute) {
        timeSuffix = 'minute'
        divisor = minute
    }

    const period = Math.floor(duration / divisor)
    return `${period} ${timeSuffix}${period === 1 ? '' : 's'}`
}

function TokenSummary() {
    const classes = tokenSummaryStyles()
    const StyledCell = (props: { children: any }) => <TableCell className={classes.cell}>{props.children}</TableCell>
    const StyledDivider = () => <Divider className={classes.divider} variant='inset' />
    const [hours, setHours] = useState<string>("")
    const [price, setPrice] = useState<string>("")
    const [volume, setVolume] = useState<string>("")
    const [change, setChange] = useState<string>("")

    blockchainCallback(async (blockchain: BlockchainProps) => {
        const lastUpdate = await blockchain.contracts.Stake.lastUpdate()
        const now = Math.round(new Date().getTime() / 1000);
        setHours(getDuration(now, lastUpdate.timestamp.toNumber()))
        setPrice('$' + lastUpdate.price.toString())
        setVolume('$' + lastUpdate.volume)

        const updates = await blockchain.contracts.Stake.updates(1)

        if (updates.numerator.toNumber() > 1) {
            const priorPrice = 3//(await blockchain.contracts.Stake.updates(updates.length - 2)).price.toNumber()

            if (priorPrice > 0) {
                setChange(`${(lastUpdate.price.toNumber() - priorPrice) / priorPrice} %`)
            }
        }
    })

    return <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={2}
        className={classes.root}
    >
        <Grid item>
            <Container className={classes.container}> Last rewards update: <span className={classes.bold}>{hours}</span></Container>
            <StyledDivider />
        </Grid>
        <Grid item>
            <TableContainer className={classes.tableBorder}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledCell>
                                Last update price
                        </StyledCell>
                            <StyledCell>
                                Last update volume
                        </StyledCell>

                            <StyledCell>
                                Last update change
                        </StyledCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <StyledCell>
                                {price}
                            </StyledCell>
                            <StyledCell>
                                {volume}
                            </StyledCell>
                            <StyledCell>
                                {change}
                            </StyledCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
        <Grid item>
            <StyledDivider />
            <Container className={classes.container}>The price is noted every 24 hours, and if positive, rewards will be updated at approximately 5:00 UTC.</Container>
        </Grid>
    </Grid>
}

const cardRowStyles = makeStyles(theme => createStyles({
    root: {
    },
    Card: {
        marginRight: 20,
        padding: 10,
        width: 200,
        height: 200,
        background: theme.componentBackground[theme.palette.type],
        color: theme.foregroundColor[theme.palette.type],
        fontSize: theme.standardFont.fontSize * 2
    },
    headerCell: {
        fontSize: theme.standardFont.fontSize + 6,
        fontFamily: theme.standardFont.fontFamily
    }
}))

enum CardIconTypes {
    MonetizationOn,
    TrendingUp,
    AccountBalance,
    PanTool,
    Wallet,
    Calendar,
    Coffee,
    Atm
}


const icons = [<MonetizationOnIcon />, <TrendingUpIcon />, <AccountBalanceIcon />, <PanToolIcon />, <AccountBalanceWalletIcon />, <TodayIcon />, <FreeBreakfastIcon />, <LocalAtmIcon />]

interface cardProps {
    iconType: CardIconTypes,
    header: string,
    value: string,
    title?: string
}

function CardedCell(props: cardProps) {
    const classes = cardRowStyles()
    return (
        <Tooltip title={props.title || ''}>
            <Grid item>
                <Card className={classes.Card}>
                    <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        spacing={5}
                    >
                        <Grid item>{icons[props.iconType]}</Grid>
                        <Grid item>{props.header}</Grid>
                        <Grid item>{props.value}</Grid>
                    </Grid>
                </Card>
            </Grid>
        </Tooltip>)
}

interface cardRowProps {
    title: string,
    children: any
}

function CardRow(props: cardRowProps) {
    const classes = cardRowStyles()
    return <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        className={classes.root}
        spacing={3}
    >
        <Grid item className={classes.headerCell}>
            {props.title}
        </Grid>
        <Grid item>
            <Grid container
                direction="row"
            >
                {props.children}
            </Grid>

        </Grid>
    </Grid>
}

function NetworkStatistics() {
    const [totalSupply, setTotalSupply] = useState<string>('')
    const [numStakers, setNumStakers] = useState<string>('')

    blockchainCallback(async (blockchain) => {
        setTotalSupply((await blockchain.contracts.Token.totalSupply()).toString().fromWAD())
        setNumStakers((await blockchain.contracts.Stake.numStakers()).toString())

    })

    return (
        <CardRow title="Network statistics">
            <CardedCell iconType={CardIconTypes.MonetizationOn} header="Pamp price" value="<placeholder>" title="This data will be supplied via an external API call" />
            <CardedCell iconType={CardIconTypes.TrendingUp} header="24H volume" value="<placeholder>" title="This data will be supplied via an external API call" />
            <CardedCell iconType={CardIconTypes.AccountBalance} header="Total Supply" value={totalSupply} />
            <CardedCell iconType={CardIconTypes.PanTool} header="Stakers" value={numStakers} />
        </CardRow>
    )
}

interface myStatsProps {
    balance: string
    setBalance: (s: string) => void,
    totalSupply: string
    setTotalSupply: (t: string) => void
    unclaimedRewards: string
    setUnclaimedRewards: (r: string) => void
}

function MyStatistics(props: myStatsProps) {
    const [daysStaked, setDaysStaked] = useState<string>("")


    blockchainCallback(async (blockchain) => {
        const bal = await (await blockchain.contracts.Token.balanceOf(blockchain.account)).toString().fromWAD()
        props.setBalance(bal)
        setDaysStaked(await (await blockchain.contracts.Stake.getDaysStaked(blockchain.account)).div(86400).toString())
        const currentStaker = await blockchain.contracts.Stake.stakers(blockchain.account)
        const tSupply = await (await blockchain.contracts.Token.totalSupply()).toString()
        props.setTotalSupply(tSupply)
        const reward = await blockchain.contracts.Stake.iterativelyCalculateOwedRewards(currentStaker.lastTimestamp, currentStaker.startTimestamp, bal.toWAD(), blockchain.account, tSupply)
        props.setUnclaimedRewards(reward.toString().fromWAD())

    })

    return (
        <CardRow title="My statistics">
            <CardedCell iconType={CardIconTypes.Wallet} header="Pamp balance" value={props.balance} />
            <CardedCell iconType={CardIconTypes.Calendar} header="Days staked" value={daysStaked} />
            <CardedCell iconType={CardIconTypes.Coffee} header="Unclaimed rewards" value={props.unclaimedRewards} />
        </CardRow>
    )
}

const actionStyles = makeStyles(theme => createStyles({
    button: {
        background: 'linear-gradient(to bottom right, #D7D7D7, #00FF24)',
        color: '#FF006E'
    }
}))

function ActionPanel(props: { rewardsToClaim: boolean }) {
    const [claimClicked, setClaimClicked] = useState<boolean>(false)
    const [migrateClicked, setMigrateClicked] = useState<boolean>(false)
    const [hasMigrated, setHasMigrated] = useState<boolean>(true)

    blockchainCallback(async (blockchain) => {
        if (claimClicked) {
            await blockchain.contracts.Token.updateMyStakes()
            setClaimClicked(false)
        }
        if (migrateClicked) {
            await blockchain.contracts.Stake.migratePreviousState()
            setMigrateClicked(false)
        }
    }, [claimClicked, migrateClicked])

    blockchainCallback(async (blockchain) => {
        const staker = await blockchain.contracts.Stake.stakers(blockchain.account)
        setHasMigrated(staker.hasMigrated)
    })

    const classes = actionStyles()
    return <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={4}>
        {props.rewardsToClaim ? <Grid item>
            <Button className={classes.button} variant='outlined' onClick={() => setClaimClicked(true)} >Claim rewards</Button>
        </Grid> : ""}
        {!hasMigrated ? <Grid item>
            <Button className={classes.button} variant='outlined' onClick={() => setMigrateClicked(true)} >Migrate Staking Time</Button>
        </Grid> : ""}
    </Grid>
}