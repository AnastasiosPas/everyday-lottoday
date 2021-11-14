import React, { useState, useEffect } from "react";
import Body from './Body';

import '../App.css';


const LiveDraw = () => {
    

    const [draw, setDraw] = useState(0)
    const [totalLots, setTotalLots] = useState(0)


    useEffect(() => { 
        let lotsTotal = 0;
                fetch('https://stark-hollows-81053.herokuapp.com/')
                .then(response => response.json())
                .then(data => {
                    data.forEach( user => {
                        lotsTotal = lotsTotal + Number(user.lots);
                    })
                    setTotalLots(lotsTotal);                    
                    //console.log("Total lots at first", totalLots);    
                    })
        setInterval ( () => {
             const now = new Date();
               if (now.getHours() === 19 && now.getMinutes() === 0 && now.getSeconds() === 0) {
                
                setDraw(Math.floor(Math.random() * totalLots+1));   
        }
        }, 100)
            }, [totalLots, draw]);
           

    return (
        <div>
            <Body subtitle2="The daily draw will take place at exactly 19:00 CET" /> 
                <br/>
            <p>The total number of lots today is: {totalLots}</p>
            <p>The winning lot of today is number: {draw}</p>
        </div>
    )
}

export default LiveDraw



