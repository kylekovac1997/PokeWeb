import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
interface SignupCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const [signupCredentials, setSignupCredentials] = useState<SignupCredentials>(
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  const signUpMutation = useMutation(() =>
    axios.post("http://localhost:4000/api/signup", signupCredentials)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupCredentials.password === signupCredentials.confirmPassword) {
      console.log("it worked");
      signUpMutation.mutate();
    } else {
      console.log("doesnt match");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupCredentials((prevSignupCredentails) => ({
      ...prevSignupCredentails,
      [name]: value,
    }));
  };

  return (
    <div>
      {signUpMutation.isError && <div>Signup Error Occurred:</div>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={signupCredentials.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={signupCredentials.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={signupCredentials.password}
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">ConfirmPassword</label>
        <input
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          value={signupCredentials.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default Signup;
