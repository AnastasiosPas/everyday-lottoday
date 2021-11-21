import React, { useState, useEffect } from "react";
import Body from './Body';

import '../App.css';


const LiveDraw = () => {
    

    const [draw, setDraw] = useState('');
    const [totalLots, setTotalLots] = useState(0);


    useEffect(() => { 
        let lotsTotal = 0;
                fetch('https://stark-hollows-81053.herokuapp.com/')
                .then(response => response.json())
                .then(data => {
                    data.forEach( user => {
                        lotsTotal = lotsTotal + Number(user.lots);
                    })
                    setTotalLots(lotsTotal);                    
                    })
        setInterval ( () => {
             const now = new Date();
               if (now.getHours() === 19 && now.getMinutes() === 0 && now.getSeconds() === 0) {
                
                setDraw(Math.floor(Math.random() * totalLots+1));   
        }
        }, 100)
            }, [totalLots, draw]);
           
            const today = new Date();      
            const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            const todayDate = today.getDate() + " " + m[today.getMonth()];   
            const minutes = () => { return (today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes())}
            const hours = today.getHours();
            const time =  hours+ ":" + minutes();

console.log("check the draw state after the draw:", draw);

    return (
        <div>
            <Body subtitle2="The daily draw will take place at exactly 19:00 CET" /> 
                <br/>
            <p>The total number of lots today is: {totalLots}</p>
            <p style={{color:'white'}}>The time now is: {time}</p>
            <p>The winning lot of {todayDate} is number: {draw}</p>
        </div>
    )
}

export default LiveDraw



