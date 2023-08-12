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

function App() {
  return (
    <>
      <NavigationBar />
      <SecondNavBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/PokeBox" element={<PokeBox />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/EventsPage" element={<EventsPages />} />
        <Route path="/TradingCardGame" element={<CardsPage />} />
        <Route path="/:name" element={<CardInfoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
