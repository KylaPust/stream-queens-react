import CardBack from "./cardback";
import CardFront from "./cardfront";
import Shrek from '../static/Shrek.png';
import { useState } from "react";

export default function Card() {
    //useState returns an array, so we pull things out of the array to use them
    const [isFront,setIsFront] = useState(true) 
    function handleClick() {
        setIsFront(function(previousIsFront) {

            return !previousIsFront
        })
    }
    
    function renderCardSide() {
        if (isFront){
            return <CardFront movieImage= {Shrek} movieTitle="SHREK!!!!"/>
        }
        else {
            return <CardBack movieName= "CardBack"/>
        }
    }
    return <div onClick={handleClick} style={{textAlign:"center",color:"red",border:"solid",borderColor:"purple",borderWidth:"5px",width:"18rem"}}>
        {renderCardSide()}
       </div>
}