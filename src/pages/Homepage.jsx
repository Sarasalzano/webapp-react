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
        <>
        <div className="d-flex flex-wrap m-2">
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
        </>
    );
}