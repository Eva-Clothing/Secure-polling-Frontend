import React, {useState} from 'react';
import "./CardVote.css"

const name = localStorage.getItem('name')

function CardVote(){
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    return (
        <div class="main_div">
        <div class="center_div">
            <div class="top_div">
                <h2>Name</h2>
                <h1>SecureVote</h1>
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