import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormReview from "../components/FormReview";

export default function MovieDetailPage() {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    function fetchSingleMovie() {
        axios.get(`http://localhost:3000/movie/${id}`)
            .then(res => setMovie(res.data))
            .catch(error => console.log("errore"));
    }

    useEffect(fetchSingleMovie, [id]);

    return (
        
            <div className="card-wrapper p-4 " style={{background: "linear-gradient(135deg, #141E30, #325175ff)"}}>
                <header>
                        <div className="top-card-wrapper" >
                            <div ClassName="card" style={{width:"20rem"}}>
                                <img src={`http://localhost:3000/imgs/${movie?.image}`} alt={movie?.title} style={{height:"30rem"}} />
                            </div>
                            <div className="text-wrapper text-white">
                                <h1 className="card-title">{movie?.title}</h1>
                                <h3 className="sort-by"><i>{movie?.director}</i></h3>
                                <p className="card-text">{movie?.abstract}</p>
                            </div>
                        </div>
                </header>

                <section id="reviews">
                    <h4 className="text-warning m-4">Our Community Reviews</h4>
                    <div>
                        <FormReview idProp={id} reloadReviews={fetchSingleMovie} />
                    </div>
                </section>

                <div className="div">
                    <h5>{movie?.vote}</h5>
                    {movie?.reviews?.length > 0 ? (
                        movie.reviews.map((review, index) => (
                            <ReviewCard key={index} reviewProp={review} />
                        ))
                    ) : (
                        <p >Nessuna recensione ancora.</p>
                    )}
                </div>
            </div>
            
    );
}