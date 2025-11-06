import MainLayout from "./layouts/mainLayout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage.jsx";
import MovieDetailPage from "./pages/MovieDetailPage.jsx";
import './App.css'
import { GlobalProvider } from "./contexts/GlobalContext.jsx";

function App() {


return (
  <>
  <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  </>
);
}

export default App
