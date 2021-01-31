import React, { useState } from 'react';
import "./CardVote.css"


function CardVote() {
    var name = localStorage.getItem("name")
    var today = new Date(),

        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div class="main_div">
            <div class="center_div">
                <div class="top_div">
                    <h2>Name</h2>
                    <h1>Secure Polling </h1>
                </div>
                <div class="bottom_div">
                    <h2>{name}</h2>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}

export default CardVote