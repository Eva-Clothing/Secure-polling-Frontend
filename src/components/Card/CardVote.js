import React, {useState} from 'react';


const user = localStorage.getItem('user')

function CardVote(){
    return (
        <div class="main_div">
        <div class="center_div">
            <div class="top_div">
                <h2>Name</h2>
                <h1>SecureVote</h1>
            </div>
            <div class="bottom_div">
                <h2>{user.displayName}</h2>
            </div>
        </div>
    </div>
    )
}