import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import GamesPage from "./pages/GamesPage";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="">
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
    </div>
  )
}

export default App