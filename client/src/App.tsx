import PokeBox from "./pages/PokeBox";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import NavigationBar from "./componets/navigationBar";
import MainScreen from "./pages/mainPage/MainScreen";
import Footer from "./pages/Footer";
import EventsPages from "./pages/mainPage/pages/EventsPages";
import CardsPage from "./pages/mainPage/pages/CardsPage";
import SecondNavBar from "./componets/SecondNavBar";
import CardInfoPage from "./pages/mainPage/pages/cardPage/CardInfoPage";
import PokeTv from "./pages/PokeTv";
import News from "./pages/news/News";
import NewsInfoPage from "./pages/news/NewsInfoPage";
import MewTwoPage from "./pages/mainPage/pages/MewTwoPage";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <>
      <NavigationBar />
      <SecondNavBar />

      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/PokeBox" element={<PokeBox />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/EventsPage" element={<EventsPages />} />
        <Route path="/Card" element={<CardsPage />} />
        <Route path="/Card/:name" element={<CardInfoPage />} />
        <Route path="/PokeTv" element={<PokeTv />} />
        <Route path="/News" element={<News />} />
        <Route path="/News/:name" element={<NewsInfoPage />} />
        <Route path="/MewTwoPage" element={<MewTwoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
