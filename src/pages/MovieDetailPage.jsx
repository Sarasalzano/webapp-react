import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MovieDetailPage(){
const [movie, setMovie] = useState(null);
const { id } = useParams();

    function fetchSingleMovie(){
        axios.get(`http://localhost:3000/movie/${id}`)
        .then(res => {setMovie(res.data)})
        .catch(error => console.log("errore"))
    }

    useEffect(fetchSingleMovie, [id]);

    return(
    <>
    <header>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                    <div className="card-body">
                        <img src={`http://localhost:3000/imgs/${movie.image}`} alt={movie?.title} />
                        <h1 className="card-title">{movie?.title}</h1>
                        <h3 className="sort-by"><i>{movie?.director}</i></h3>
                        <p className="card-text">{movie?.abstract}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section id="reviews">
        <h4>Our Community Reviews</h4>
    </section>
        <div className="div">
            <h5>media voto: {movie?.vote}</h5>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    </>
    );
}