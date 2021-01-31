import React, {useState} from 'react';
import "./CardVote.css"

const email = localStorage.getItem('email')

function CardVote(){
    
    return (
        <div class="main_div">
        <div class="center_div">
            <div class="top_div">
                <h2>Name</h2>
                <h1>SecureVote</h1>
            </div>
            <div class="bottom_div">
                <h2>{email}</h2>
            </div>
        </div>
    </div>
    )
}

export default CardVote