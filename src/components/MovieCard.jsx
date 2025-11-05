import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="d-flex flex-wrap m-2 align-items-center">
    <div className="card" style={ { width: "18rem", height: "40rem" }}>
      <img src={`http://localhost:3000/imgs/${movie.image}`} alt={movie.title} style={ { height: "406px"}}/>
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.abstract}</p>
        <Link className="btn btn-primary" to={`/movie/${movie.id}`}>
          Guarda Dettagli
        </Link>
    </div>
</div>
</div>
  );
}

