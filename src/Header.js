import React, { useState } from 'react'



export function Header(){
    const [activeList, setActiveList ] =useState([1,0,0,0])
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <a className="navbar-brand" href="#">iTrader</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#owca">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="owca">
                <div class="navbar-nav">
                <a onClick={()=> setActiveList([1,0,0,0])}class={`nav-item nav-link ${activeList[0]===1?"active":""}`} href="#">Home</a>
                <a onClick={()=> setActiveList([0,1,0,0])}class={`nav-item nav-link ${activeList[1]===1?"active":""}`} href="#">Menu</a>
                <a onClick={()=> setActiveList([0,0,1,0])}class={`nav-item nav-link ${activeList[2]===1?"active":""}`} href="#">About</a>
                <a onClick={()=> setActiveList([0,0,0,1])}class={`nav-item nav-link ${activeList[3]===1?"active":""}`} href="#">Contact</a>
                </div>
            </div>
        </nav>
    )
}