import { useSelector } from "react-redux";
import { RootState } from "../componets/redux/store/ReduxStore";

const UserPage = () => {
  const userLoggedIn = useSelector(
    (state: RootState) => state.loggedIn.username
  );
  return <div>UserPage {userLoggedIn}</div>;
};

export default UserPage;
