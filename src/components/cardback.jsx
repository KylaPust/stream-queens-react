import React from 'react';

export default function CardBack({movieTitle, movieDesc, movieLink, movieImage}) {

    return <div className="card">
        <div className="card-body">
       <h5 className="card-title">{movieTitle || "Unknown"}</h5> 
      <p className="card-text">{movieDesc || "Unknown"} </p><br></br>
        </div>
    </div>
}