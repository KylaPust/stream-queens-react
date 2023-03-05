export default function CardFront({movieImage, movieTitle, movieLink}) {
    console.log(movieImage)
    return <div>
       <img height="150" alt="movieImage" href={movieLink}
       src={movieImage}/>
       <br></br>
       {movieTitle}
    </div>
}