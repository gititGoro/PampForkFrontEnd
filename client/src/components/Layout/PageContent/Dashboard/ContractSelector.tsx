import React from 'react';
import { useContext, useState } from 'react'
import { EthereumContext } from '../../../contexts/EthereumContext'
import ContractSection from './ContractSection/index'
import { Grid, Select, FormControl, InputLabel, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    select: {
        width: "500px",
    },
    grid: {
        margin: "50px"
    }
})


export default function ContractSelector() {
    const classes = useStyles()
    const ethereumContextProps = useContext(EthereumContext)
    const [selectedContract, setSelectedContract] = useState<string>("")

    if (!ethereumContextProps.blockchain)
        return <div></div>

    const contractList = Object.keys(ethereumContextProps.blockchain.contracts)

    return <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.grid}
    >
        <Grid>
            <FormControl>
                <InputLabel id="contractSelect" >Contract</InputLabel>
                <Select
                    className={classes.select}
                    labelId="contractSelect"
                    value={selectedContract}
                    onChange={(event: any) => setSelectedContract(event.target.value)}
                >
                    {contractList.map((contract) => <MenuItem key={contract} value={contract}>{contract}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
        {selectedContract !== '' ? <ContractSection selectedContract={selectedContract} isAdmin={true} /> : ""}
    </Grid>

}