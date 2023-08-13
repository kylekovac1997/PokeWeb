import React, { ReactNode, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

interface DialogInterface {
  children: ReactNode;
}

const DialogLogin = styled.div`
  background-image: url("/src/images/loginPokeBall.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: auto;
  margin-top: 10px;
  &:hover {
    background-image: url("/src/images/loginPokeBallGif.gif");
    background-size: 155px;
  }
`;

const DialigChildren = styled.dialog`
  background-image: url("/src/images/ProfessorOak.png");
  z-index: 2;
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  margin-top: 600px;
  background-repeat: no-repeat;
  width: 529px;
  height: 400px;
`;

export const Dialog: React.FC<DialogInterface> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  return (
    <>
      <DialogLogin onClick={openDialog}></DialogLogin>
      <DialigChildren open={isOpen} onClose={closeDialog}>
        <div
          style={{
            width: "260px",
            height: "260px",
            position: "relative",
          }}
        >
          {children}
        </div>

        <Button
          onClick={closeDialog}
          variant="secondary"
          style={{ float: "right", marginTop: "60px" }}
        >
          Close
        </Button>
      </DialigChildren>
    </>
  );
};
