import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage';
import GamesPage from "./pages/GamesPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import PartyPopperButton from "./components/PartyPopperButton";


const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
      </Routes>
      <PartyPopperButton />
      <BackToTopButton />
      {/* <Footer /> */}
    </div>
  )
}

export default App