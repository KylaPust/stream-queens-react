export default function CardFront({movieImage, movieTitle}) {
    console.log(movieImage)
    return <div>
       <img height="50" alt="movieImage" 
       src={movieImage}/>
       {movieTitle}
    </div>
}