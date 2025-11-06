import axios from "axios";
import { useState } from "react";

export default function FormReview({ idProp, reloadReviews }){
//variabile di stato di default
const [formData, setFormData] = useState({name:"anonymous", text:"", vote: 1}) 

const handleSubmit = (e) => {
// preveniamo invio form
 e.preventDefault();

//chiamata axios per store
    axios.post(`http://localhost:3000/movie/${idProp}/reviews`, formData)
      .then(() => {
        setFormData({ name: "anonymous", text: "", vote: 1 });
        // aggiorna subito la lista dopo l’invio
        reloadReviews();
      })
      .catch(err => console.log("errore film:", err));
  };
//definisci funzione  fieldValue 

const setFieldValue = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
    return(
        <div className="card bg-dark text-white m-4">
        <header>
            <h5 className="m-3">Add your review</h5>
        </header>
         <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={setFieldValue} />
                    </div>
                    <div className="form-group">
                        <label>Review</label>
                        <textarea className="form-control" name="text" value={formData.text} onChange={setFieldValue}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Voto</label>
                        <input name="vote" type="number" min="1" max="5" className="form-control" value={formData.vote} onChange={setFieldValue} />
                    </div>
                    <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-danger text-white fw-bold">Send</button>
                    </div>
                </form>
            </div>
            </div>
      
    );
}