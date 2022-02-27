import React, { useEffect } from 'react'  
import "./row.css"
import axios from '../axios'  
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLarge}) { 
    const [movies, setMovies] = React.useState([])  
    const [trailerUrl, setTrailerUrl] = React.useState("")
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl); 
            setMovies(request.data.results)
            console.log(request);
            return request
        } 
        fetchData(); 
    },[fetchUrl]); 
    const opts = {
        height : "390",
        width : "99%",  
        playerVars : {
            autoplay : 1, 
        },
    }; 

    function handleClick(movie) {
        if(trailerUrl) {
            setTrailerUrl('');
        } 
        else {
            movieTrailer(movie?.name|| movie?.title||movie?.original_name||"")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search) 
                setTrailerUrl(urlParams.get('v'))
            }).catch((error)=>console.log(error));
        }
    }
  return (
    <div className='row'>
        <h2 className='row-title'>{title}</h2>  
        <div className='row-posters'>
            {movies.map(movie=>{  
                
                return <img 
                        className={`row-poster ${isLarge&&"row-poster-large"}`} 
                        onClick={()=>handleClick(movie)}
                        key={movie.id} 
                        src={`${base_url}${isLarge?movie.poster_path:movie.backdrop_path}`} 
                        alt={movie?.name|| movie?.title||movie?.original_name}>
                       </img>
            })}
        </div>  
        {trailerUrl && <YouTube videoId={trailerUrl} opts = {opts}/>}
        
    </div>
  );
}

export default Row;