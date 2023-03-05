import 'bootstrap/dist/css/bootstrap.min.css'
export default function CardBack({movieTitle, movieDesc, movieLink}) {

    return <div style={{width: '18rem'}}>
        
        movieTitle: {movieTitle || "Unknown"}
        movieDesc: {movieDesc || "Unknown"} <br></br>
        movieLink: {movieLink || "Unknown"}
        
     

    </div>
}