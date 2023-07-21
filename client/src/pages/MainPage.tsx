import axios from "axios";

function MainPage() {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("accessToken", accessToken);

  async function ProtectedApi() {
    try {
      const response = await axios.get("http://localhost:4000/api/test", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // Handle successful response (e.g., status code 200)
      if (response.status === 200) {
        console.log("Protected API response:", response.data);
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        console.log("Access token expired or invalid. Refreshing token...");
        try {
          const refreshResponse = await axios.post(
            "http://localhost:4000/api/refreshToken",
            {
              refreshToken: refreshToken,
            }
          );

          // Update the access token in local storage
          const newAccessToken = refreshResponse.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
          console.log("New access token:", newAccessToken);

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
      MainPage
      <button onClick={ProtectedApi}>Protected API</button>
      {/* Your other components and logic */}
    </div>
  );
}

export default MainPage;
