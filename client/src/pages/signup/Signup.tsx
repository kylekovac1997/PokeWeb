import { Textarea, Wrap } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useMutation } from "react-query";
import {
  FormStyle,
  LabelInputBox,
  StyledInput,
} from "../../componets/styled/SignUpPage";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signupCredentials, setSignupCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    description: "",
    profilePic: null as string | null, // Store base64 string instead of File
  });
  const navigate = useNavigate();

  const signUpMutation = useMutation(() =>
    axios.post("http://localhost:4000/api/signup", signupCredentials)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupCredentials.password === signupCredentials.confirmPassword) {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        console.log("it worked");
        signUpMutation.mutate();
        navigate("/");
      }
    } else {
      console.error("Password mismatch");
    }
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        const file = files[0];

        const reader = new FileReader();

        reader.onload = () => {
          const base64Image = reader.result as string;

          setSignupCredentials((prevSignupCredentials) => ({
            ...prevSignupCredentials,
            profilePic: base64Image, // Store the selected image as base64
          }));
        };

        reader.readAsDataURL(file);
      }
    } else {
      setSignupCredentials((prevSignupCredentials) => ({
        ...prevSignupCredentials,
        [name]: value,
      }));
    }
  };

  return (
    <Wrap
      w="900px"
      h="700px"
      style={{
        display: "flex",
        backgroundImage: "url('/src/images/ProfessorOak.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {signUpMutation.isError && <div>Signup Error Occurred:</div>}

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div>
            <FormStyle>
              <LabelInputBox>
                <label htmlFor="username">Username: </label>
                <StyledInput
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={signupCredentials.username}
                  onChange={handleChange}
                />
              </LabelInputBox>
              <LabelInputBox>
                <label htmlFor="email">Email: </label>
                <StyledInput
                  type="text"
                  id="email"
                  name="email"
                  required
                  value={signupCredentials.email}
                  onChange={handleChange}
                />
              </LabelInputBox>
              <LabelInputBox>
                <label htmlFor="password">Password: </label>
                <StyledInput
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={signupCredentials.password}
                  onChange={handleChange}
                />
              </LabelInputBox>
              <LabelInputBox>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <StyledInput
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={signupCredentials.confirmPassword}
                  onChange={handleChange}
                />
              </LabelInputBox>
              <Button variant="secondary" type="submit">
                Next
              </Button>
            </FormStyle>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <FormStyle style={{ backgroundColor: "white" }}>
              <LabelInputBox>
                <label htmlFor="description">Description: </label>
                <Textarea
                  id="description"
                  name="description"
                  required
                  value={signupCredentials.description}
                  onChange={handleChange}
                />
              </LabelInputBox>

              <Button variant="secondary" type="submit">
                Next
              </Button>
            </FormStyle>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <FormStyle style={{ backgroundColor: "white" }}>
              <LabelInputBox>
                <label htmlFor="profilePic">Profile Picture: </label>
                <input
                  type="file"
                  id="profilePic"
                  name="profilePic"
                  required
                  accept="image/*"
                  onChange={handleChange}
                />
              </LabelInputBox>
              <Button variant="secondary" type="submit">
                Finish
              </Button>
            </FormStyle>
          </div>
        )}
      </form>
    </Wrap>
  );
};

export default Signup;
