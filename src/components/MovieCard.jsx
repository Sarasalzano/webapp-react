import { Link } from "react-router-dom";

export default function MovieCard(){

    
    return(
        <div className="card">
            <div className="card-body">
                <img src="" alt="" />
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <Link className="btn btn-primary" to="/movie/1">Guarda Dettagli</Link>
            </div>
        </div>
    );
}