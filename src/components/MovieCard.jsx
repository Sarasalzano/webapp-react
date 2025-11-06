import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="d-flex flex-wrap m-2 align-items-center">
    <div className="card bg-dark text-white border-0 rounded-2" style={ { width: "18rem", height: "40rem" }}>
      <img src={`http://localhost:3000/imgs/${movie.image}`} alt={movie.title} style={ { height: "406px"}} className="rounded-2"/>
      <div className="card-body d-flex flex-column justify-content-evenly">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-light">{movie.abstract}</p>
        <Link className="btn btn-danger text-white fw-bold" to={`/movie/${movie.id}`}>
          Guarda Dettagli
        </Link>
    </div>
</div>
</div>
  );
}

