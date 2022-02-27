import React from 'react' 
import axios from '../axios'  
import requests from '../requests';  
import './banner.css';


const base_url = "https://image.tmdb.org/t/p/original/" 


function Banner() { 
    const [movie, setMovie] = React.useState([]); 

    React.useEffect(()=>{
        async function fetchData() { 
            const request = await axios.get(requests.fetchNetflixOriginals); 
            const random = Math.floor(Math.random() * request.data.results.length-1) ; 
            setMovie(request.data.results[random]) 
            return request;
        } 
        fetchData(); 
    },[]) 

    function truncate(str,n) {
        return str?.length > n ? str.substr(0,n-1) +"..." : str;
    }


    return (
        <header className='banner' style={{
            backgroundSize : "cover", 
            backgroundImage : `url(${base_url + movie.backdrop_path})`,
            backgroundPosition : "center center",
        }}> 
            <div className='banner-contents'>
                <h1 className='banner-title'>{movie.name}</h1> 
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button'>My list</button>
                </div> 
                <h1 className='banner-description'>{truncate(movie.overview,150)}</h1>
            </div>     
            <div className='banner-faceBottom'></div>
        </header>
    )
}

export default Banner