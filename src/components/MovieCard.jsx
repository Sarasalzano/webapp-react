import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="card m-2">
      <img src={movie.image} alt={movie.title} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.abstract}</p>
        <Link className="btn btn-primary" to={`/movie/${movie.id}`}>
          Guarda Dettagli
        </Link>
      </div>
    </div>
  );
}