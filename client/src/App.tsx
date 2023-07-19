import PokeBox from "./pages/PokeBox";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import NavigationBar from "./componets/navigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/PokeBox" element={<PokeBox />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
