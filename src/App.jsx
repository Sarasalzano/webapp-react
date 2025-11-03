import MainLayout from "./layouts/mainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {


  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route element = {<MainLayout />}>
    </Route>
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
