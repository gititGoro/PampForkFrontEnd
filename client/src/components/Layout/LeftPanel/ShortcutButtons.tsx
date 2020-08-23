import React, { useState } from 'react';
import { useLocation, Redirect } from "react-router-dom";
import { ListItem, ListItemIcon, makeStyles, createStyles, Theme } from '@material-ui/core'
import Staking from '../../../images/staking.png'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        MenuItems: {
            fontFamily: theme.standardFont.fontFamily,
            fontWeight: theme.standardFont.fontWeightBold,
            fontSize: theme.standardFont.fontSize + 1,
            color: "white",
            lineHeight: "16.8px",
            textTransform: "uppercase"
        },
        listItem: {
            '&:hover': {
                backgroundColor: theme.listHoverColor[theme.palette.type],
            },
            zIndex: 0,
            paddingLeft:0
        },
        listItemSelected: {
            zIndex: 0,
            backgroundColor: theme.listHoverColor[theme.palette.type],
            '&:hover': {
                backgroundColor: theme.listHoverColor[theme.palette.type],
            },
            paddingLeft:5
        }
        , icon: {
            color: "green",
           // marginRight: 10
        },
        divider: {
            background: "rgba(255,255,255,0.8)"
        }
    }),
);

interface location {
    pathname: string
}
const classSetterFactory =
    (unselected: string, selected: string) =>
        (actualPath: location) =>
            (expectedPath: string) =>
                actualPath.pathname.length > 0 && actualPath.pathname.substring(1) === expectedPath ? selected : unselected

const showTextFactory = (expanded: boolean) => (text: string) => expanded ? text : ''

export default function ShortcutButtons(props: { expanded: boolean, isAdmin: boolean }) {


    const classes = useStyles()
    const showText = showTextFactory(props.expanded)
    const location = useLocation();

    const selectionFactory = classSetterFactory(classes.listItem, classes.listItemSelected)
    const classDecider = selectionFactory(location)
    const [redirectURL, setRedirectURL] = useState<'' | 'staking'>("")

    if (location.pathname.length > 1 && location.pathname.substring(1) === redirectURL) {
        setRedirectURL('')
    }
    const renderRedirect = redirectURL === '' ? '' : <Redirect to={'/' + redirectURL} />
    return <div className={classes.MenuItems}>
        {renderRedirect}
        <ListItem className={classDecider("staking")} button key="staking" onClick={() => setRedirectURL('staking')}>
            <ListItemIcon>
                <img src={Staking} className={classes.icon} />
            </ListItemIcon>
            {showText("Staking")}
        </ListItem>
    </div>
}

