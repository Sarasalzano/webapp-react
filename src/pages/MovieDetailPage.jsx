import ReviewCard from "../components/ReviewCard";

export default function MovieDetailPage(){
    return(
    <>
    <header>
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title">Titolo Libro</h1>
                        <h3 className="sort-by"><i>by Regista</i></h3>
                        <p className="card-text">Descrizione Film.</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section id="reviews">
        <h4>Our Community Reviews</h4>
    </section>
        <div className="div">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
    </>
    );
}