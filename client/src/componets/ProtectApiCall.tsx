import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { UserLoggedIn } from "./redux/user/UserLoggedIn";
import { setUserLoginStatus } from "./redux/login/LoggedIn";

function ProtectedApiCall() {
  const dispatch = useDispatch();
  const userLoggedIn = useSelector(UserLoggedIn);

  async function ProtectedApi() {
    try {
      const response = await axios.get("http://localhost:4000/api/test", {
        headers: {
          Authorization: `Bearer ${userLoggedIn.accessToken}`,
        },
      });

      if (response.status === 200) {
        console.log("Protected API response:", response.data);
      }
      // change any type of error to an interface error type--------------------
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        console.log("Access token expired or invalid. Refreshing token...");
        try {
          const refreshResponse = await axios.post(
            "http://localhost:4000/api/refreshToken",
            {
              refreshToken: userLoggedIn.refreshToken,
            }
          );

          // Update the access token in local storage
          const newAccessToken = refreshResponse.data.accessToken;
          dispatch(
            setUserLoginStatus({ ...userLoggedIn, accessToken: newAccessToken })
          );
          // Retry the protected API call with the new access token
          const newResponse = await axios.get(
            "http://localhost:4000/api/test",
            {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            }
          );

          // Handle successful response with the new access token
          if (newResponse.status === 200) {
            console.log(
              "Protected API response with new token:",
              newResponse.data
            );
          }
        } catch (refreshError) {
          console.log("Error refreshing access token:", refreshError);
          // Handle refresh token error here (e.g., logout the user)
        }
      } else {
        console.log("Error calling protected API:", error);
      }
    }
  }

  return (
    <div>
      ProtectedApiCall
      <button onClick={ProtectedApi}>Protected API</button>
    </div>
  );
}

export default ProtectedApiCall;
