import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import { useGlobal } from "../contexts/GlobalContext.jsx";

export default function MainLayout(){
    // etrapoliamo da context var di stato
    const { loading } = useGlobal();
    return(
        <>     
        <Header />
        <Outlet />
        {/* se la variabile di stato è true renderizza componente */}
        {loading && <Loader />}
        </>
    );
}