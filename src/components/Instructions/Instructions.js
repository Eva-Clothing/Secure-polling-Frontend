import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import './Instructions.css'
import Header from "../header/Header"
import DrawerTag from "../Drawer"

function Instructions(props) {
    return (
        <>
            <Header />
            <DrawerTag classes={props.classes} />
            <Card className="info">
                <CardContent color="textSecondary">
                    <h2>Instructions🛑</h2>
                </CardContent>
                <div className="info_para">
                    <li>This is a simple Polling application made for taking small survey regarding some issue and visualise the data.</li>
                    <li>
                        <strong>You have to cast the vote in by providing the details as asked in the 👆"VOTE" section. You can vote only once.</strong>
                    </li>
                    <li>You can see others openion in📊 <strong>BarData</strong> section.</li>
                    <li>You also can see others people choice in 📑<strong>Data</strong> section. </li>
                    <li>You also can visualise the total poll in a particular day in 📉 <strong>LineData</strong> section. </li>
                    <li>Take a token of remembrance by taking personalised card 💳<strong>Photo Booth</strong> section. </li>
                </div>
                <h3>Made with 💙 by <strong>Runtime Terror's</strong> </h3>

            </Card>
        </>
    )
}

export default Instructions
