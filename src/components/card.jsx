import React from 'react';
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
            return <CardBack movieImage= {props.movieImage} movieTitle={props.movieTitle} movieDesc={props.movieDesc} movieLink={props.movieLink}/>
        }
    }
    return <div   style={{color:"black",
    borderWidth:"5px",width:"10rem"}}><div onClick={handleClick} 
  >{renderCardSide()}
       </div>
       <a href={props.movieLink} className="card-link" target="_blank" rel="noopener noreferrer">movie link</a>
       </div>
}