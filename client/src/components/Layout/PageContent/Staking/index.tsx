import React from 'react';
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
    Button
} from '@material-ui/core';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PanToolIcon from '@material-ui/icons/PanTool';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import TodayIcon from '@material-ui/icons/Today';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
const useStyles = makeStyles(theme => createStyles({
    root: {
        display: 'flex',
        padding: '20px',
        color: theme.foregroundColor[theme.palette.type],
        margin: 20
    },
    cell: {
        // width: '80%'
    }
}))

interface props {

}

export default function Staking(props: props) {
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
                <MyStatistics />
            </Grid>
            <Grid item>
                <ActionPanel />
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




function TokenSummary() {
    const classes = tokenSummaryStyles()
    const StyledCell = (props: { children: any }) => <TableCell className={classes.cell}>{props.children}</TableCell>
    const StyledDivider = () => <Divider className={classes.divider} variant='inset' />
    return <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={2}
        className={classes.root}
    >
        <Grid item>
            <Container className={classes.container}> Last rewards update: <span className={classes.bold}>41 hours</span></Container>
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
                                $ 1.257
                        </StyledCell>
                            <StyledCell>
                                $ 1236610
                        </StyledCell>
                            <StyledCell>
                                14.000000000000002%
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
    value: string
}

function CardedCell(props: cardProps) {
    console.log(icons.length)
    const classes = cardRowStyles()
    return (
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
        </Grid>)
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
    return (
        <CardRow title="Network statistics">
            <CardedCell iconType={CardIconTypes.MonetizationOn} header="Pamp price" value="$10" />
            <CardedCell iconType={CardIconTypes.TrendingUp} header="24H volume" value="$3000" />
            <CardedCell iconType={CardIconTypes.AccountBalance} header="Total Supply" value="1.2 million" />
            <CardedCell iconType={CardIconTypes.PanTool} header="Stakers" value="7452" />
        </CardRow>
    )
}

function MyStatistics() {
    return (
        <CardRow title="My statistics">
            <CardedCell iconType={CardIconTypes.Wallet} header="Pamp balance" value="12 PAMP" />
            <CardedCell iconType={CardIconTypes.Calendar} header="Days staked" value="0" />
            <CardedCell iconType={CardIconTypes.Coffee} header="Unclaimed rewards" value="13 PAMP" />
            <CardedCell iconType={CardIconTypes.Atm} header="Next expected reward" value="0.2 PAMP" />
        </CardRow>
    )
}

const actionStyles = makeStyles(theme => createStyles({
    button: {
        background: 'linear-gradient(to bottom right, #D7D7D7, #00FF24)',
        color: theme.foregroundColor[theme.palette.type]
    }
}))

function ActionPanel() {
    const classes = actionStyles()
    return <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
    >
        <Grid item>
            <Button className={classes.button} variant='outlined' onClick={() => alert('claiming')} >Claim rewards</Button>
        </Grid>
    </Grid>
}