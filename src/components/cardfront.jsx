import React from 'react';
export default function CardFront({movieImage, movieTitle, movieLink}) {
  
    return <div className="card">
       <img width="100%" alt="movieImage" href={movieLink}
       src={movieImage}/>
       <br></br>
       {movieTitle}
    </div>
}

