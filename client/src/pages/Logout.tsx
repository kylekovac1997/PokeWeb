import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginStatus } from "../componets/redux/login/LoggedIn";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    try {
      await axios.post("http://localhost:4000/api/logout");
      navigate("/");
      dispatch(setUserLoginStatus({ isLoggedIn: false, username: "" }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};
