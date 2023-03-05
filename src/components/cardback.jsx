export default function CardBack({movieTitle, movieDesc, movieLink}) {

    return <div >
        movieTitle: {movieTitle || "Unknown"}
        movieDesc: {movieDesc || "Unknown"} <br></br>
        movieLink: {movieLink || "Unknown"}

    </div>
}