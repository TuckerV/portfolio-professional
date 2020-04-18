import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Navbar(props) {
    return (
        <AppBar className={props.style} position='static'>
            <Toolbar>
                <Typography variant="h3" align="center">
                    Tucker Vassau
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
