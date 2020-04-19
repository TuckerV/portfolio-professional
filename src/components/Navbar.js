import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import "../style/Navbar.css";

export default function Navbar(props) {

    return (
        <AppBar className={props.style} position='static'>
            <Toolbar>
                <Typography variant="h3" className="titleFont titleSize" align="center">
                    Tucker Vassau
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
