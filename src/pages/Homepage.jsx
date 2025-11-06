import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Homepage(){
    const [movies, setMovies] = useState([]);
    const fetchMovies= () =>{
        axios.get("http://localhost:3000/movie")
        .then(res=> {setMovies(res.data)})
        .catch(error => {console.log(error)})
    }

    useEffect(fetchMovies, []);

    return(
        <div className="homepage-wrapper text-white" style={{background: "linear-gradient(135deg, #141E30, #325175ff)"}}>
        <h3 className="text-warning text-center m-0 p-4">JOIN OUR COMMUNITY AND RATE YOUR FAVOURITE MOVIES</h3>
        <div className="d-flex flex-wrap">
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
        </div>
        
    );
}