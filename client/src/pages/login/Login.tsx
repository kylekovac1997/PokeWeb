import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { IsErrorResponse, LoginCredentials } from "./loginType";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../../componets/Dialog";
import { useDispatch } from "react-redux";
import { setUserLoginStatus } from "../../componets/redux/login/LoggedIn";

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const loginMutation = useMutation(() =>
    axios.post("http://localhost:4000/api/login", credentials)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((credentials) => ({
      ...credentials,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (loginMutation.isSuccess) {
      const { accessToken, refreshToken } = loginMutation.data.data;
      const username = credentials.username;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      navigate(`/UserPage`);
      dispatch(
        setUserLoginStatus({
          isLoggedIn: true,
          username: username,
          accessToken: accessToken,
          refreshToken: refreshToken,
        })
      );
    }
  }, [loginMutation.isSuccess, navigate]);

  return (
    <Dialog>
      {loginMutation.isError && (
        <div>
          An error occurred:
          {(loginMutation.error as IsErrorResponse)?.response?.data?.error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            autoComplete="current-username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" disabled={loginMutation.isLoading}>
          {loginMutation.isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </Dialog>
  );
};
