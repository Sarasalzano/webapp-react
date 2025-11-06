import { Link } from "react-router-dom";

export default function  Header(){
    return(
        <nav>
            <div className="d-flex flex-start align-items-center p-2 bg-dark" style={{height:"3rem"}}>
                <Link to="/" className="text-decoration-none text-light"><b>BOOL MOVIES</b></Link> 
            </div>
        </nav>
    );
}