import { Link } from "react-router-dom";

export default function  Header(){
    return(
        <nav>
            <div className="d-flex flex-start">
                <Link to="/" className="text-decoration-none text-black"><b>MOVIES</b></Link> 
            </div>
        </nav>
    );
}