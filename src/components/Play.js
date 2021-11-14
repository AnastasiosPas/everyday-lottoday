import React, { useState } from "react";
import Body from './Body';

import '../App.css';



const Play = ({loginCheck}) => {

    const [lotsBought, setLotsBought] = useState(0)
    const [playingLots, setPlayingLots] = useState([]);

    const onInputLots = (e) => {
    setLotsBought(e.target.value);
    return lotsBought;
    }

    function clearText() {
    document.getElementById('lotsField').value = 0;
    setLotsBought(0);
    }  


    const payPayPal = () => {
        if(loginCheck()) {
            fetch('https://stark-hollows-81053.herokuapp.com/play', {
            method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          lots: lotsBought,
          lotNrs: 0
            })
        })
        .then(response => response.json())
       .then(() => {
        let lotsTotal = 0;
        fetch('https://stark-hollows-81053.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            console.log("data of Play", data);
            data.forEach((user) => {
                lotsTotal = Number(user.lots) + lotsTotal
                console.log(lotsTotal)
            })
            })
            .then(() => {
                 let result = [];
                
                       for (let i = 1; i <= lotsBought; i++ ) {
           result.push( lotsTotal - lotsBought + i, " " )
                }  
        setPlayingLots(result);
        console.log("result", result)
            }) 
            })
       
            if(lotsBought > 0) {
       alert("Thank you for your  payment :)");
       clearText();
       console.log("let's see the lotsBought", lotsBought)
       console.log("let's see the playing Lots", playingLots)
            }
        } else {
            alert("Please, first log-in or register in order to be able to play.");
        }
        
        }
        

      
    return (
        <div className="play" >
            <Body subtitle1="Please choose the number of lots you wish to play today with:" /> 

            <input type="number" onChange={onInputLots} min="1" className="inputField" id="lotsField"/><br/>
            <input type="button" value="Pay with PayPal" onClick={payPayPal} 
                   className="playBtn" disabled={!lotsBought>0} />
            <p>You will play with {lotsBought} lots</p>
            <p>The total cost is €{10 * lotsBought}</p>
            {
               playingLots > '0' ?  <p>Your are playing with the following lots: {playingLots}</p> : <p></p>
            }
           

          
         </div>
    )
}

export default Play
