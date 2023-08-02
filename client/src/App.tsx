import PokeBox from "./pages/PokeBox";
import { Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import NavigationBar from "./componets/navigationBar";
import MainScreen from "./pages/mainPage/MainScreen";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/PokeBox" element={<PokeBox />} />
        <Route path="/UserPage" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
