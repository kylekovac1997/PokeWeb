import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginStatus } from "../componets/redux/login/LoggedIn";

export const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/logout");
      navigate("/");
      localStorage.clear();
      dispatch(
        setUserLoginStatus({
          isLoggedIn: false,
          username: "",
          accessToken: "",
          refreshToken: "",
          profilePic: "",
          description: "",
          email: "",
        })
      );
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
