import loading1 from '../../../../images/loading.gif'
import loading2 from '../../../../images/juggler.gif'
import loading3 from '../../../../images/gandalf.gif'
import loading4 from '../../../../images/hodl.gif'
import loading5 from '../../../../images/loading1.gif'
import loading6 from '../../../../images/loading2.gif'
import loading7 from '../../../../images/loading4.gif'
import loading8 from '../../../../images/loading5.gif'
import loading9 from '../../../../images/loading6.gif'
import loading10 from '../../../../images/loading7.gif'
import loading11 from '../../../../images/rogueVader.gif'

import React from 'react';
import {
    Grid,
} from '@material-ui/core';


const loadingGifs = [
    loading1,
    loading2,
    loading3,
    loading4,
    loading5,
    loading6,
    loading7,
    loading8,
    loading9,
    loading10,
    loading11,
]

export default function Loading(props: { invisible?: boolean }) {

    const loadingIndex = Math.floor(Math.random() * loadingGifs.length)
    if (props.invisible)
        return <div></div>
    return <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
        spacing={10}
    >
        <Grid item></Grid>
        <Grid item>
            <img src={loadingGifs[loadingIndex]} width={400} />
        </Grid>
    </Grid>
}