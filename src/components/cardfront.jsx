import React from 'react';
export default function CardFront({movieImage, movieTitle, movieLink}) {
  
    return <div>
       <img height="150" alt="movieImage" href={movieLink}
       src={movieImage}/>
       <br></br>
       {movieTitle}
    </div>
}