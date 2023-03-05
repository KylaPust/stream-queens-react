import React from 'react';

export default function CardBack({movieTitle, movieDesc, movieLink}) {

    return <div className="card">
        <div className="card-body">
       <h5 className="card-title">movieTitle: {movieTitle || "Unknown"}</h5> 
      <p className="card-text">movieDesc: {movieDesc || "Unknown"} </p><br></br>
        <a href={movieLink || "www.google.com"} className="card-link">movie link</a>  
        </div>
    </div>
}