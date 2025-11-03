import Header from "../components/header";

export default function MainLayout(){
    return(
        <>     
        <Header />
        <Outlet />
        </>
    );
}