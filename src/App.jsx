import MainLayout from "./layouts/mainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import MovieDetailPage from "./pages/MovieDetailPage.jsx";
import './App.css'

function App() {


return (
  <>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
}

export default App
