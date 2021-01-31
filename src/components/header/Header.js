import React from 'react'
import { Avatar, Card, CardContent } from '@material-ui/core'
import './Header.css'
import PollRoundedIcon from '@material-ui/icons/PollRounded';

function Header() {
    return (
        <>
            <Card className="header">
                <CardContent className="headerContent">
                    <h1>Secure-Polling App</h1>
                    <Avatar style={{ backgroundColor: "#5cd235", height: "50px", width: "50px", }}>
                        <PollRoundedIcon />
                    </Avatar>
                </CardContent>
            </Card>
        </>
    )
}

export default Header
