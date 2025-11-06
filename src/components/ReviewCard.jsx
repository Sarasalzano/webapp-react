export default function ReviewCard({reviewProp}){
    const {name, text, vote} = reviewProp;

    return(
        <>
        <div className="card bg-dark text-white mt-3 mb-0 mx-4">
            <div className="card-body">
                <p className="card-text">{text}</p>
                <h5 className="card-subtitle mb-2 text-body-secondary">{vote}</h5>
                <p><i>{name}</i></p>
            </div>
        </div>
    </>
    );
}