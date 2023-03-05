import CardBack from "./cardback";
import CardFront from "./cardfront";
import { useState } from "react";

export default function Card(props) {
    //useState returns an array, so we pull things out of the array to use them
    const [isFront,setIsFront] = useState(true) 
    function handleClick() {
        setIsFront(function(previousIsFront) {

            return !previousIsFront
        })
    }
    
    function renderCardSide() {
        if (isFront){
            return <CardFront movieImage= {props.movieImage} movieTitle={props.movieTitle} movieLink={props.movieLink}/>
        }
        else {
            return <CardBack movieTitle={props.movieTitle} movieDesc={props.movieDesc} movieLink={props.movieLink}/>
        }
    }
    return <div onClick={handleClick} 
    style={{color:"black",border:"solid",
    borderColor:"purple",borderWidth:"5px",width:"18rem",
    borderRadius:"20px"}}>
        {renderCardSide()}
       </div>
}