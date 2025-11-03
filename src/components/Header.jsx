import {Link} from "react-router-dom";

export default function  Header(){
    return(
        <nav>
            <div>
                <Link to="/">Movies</Link> 
            </div>
        </nav>
    );
}