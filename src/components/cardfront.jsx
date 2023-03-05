export default function CardFront({movieImage, movieTitle, movieLink}) {
    console.log(movieImage)
    return <div>
       <img height="50" alt="movieImage" href={movieLink}
       src={movieImage}/>
       {movieTitle}
    </div>
}