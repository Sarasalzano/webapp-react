import MovieCard from "../components/MovieCard";

export default function Homepage(){
    return(
        <>
        <div className="d-flex flex-wrap m-2">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
        </>
    );
}