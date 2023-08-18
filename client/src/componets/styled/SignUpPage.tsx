import styled from "styled-components";

export const FormStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 370px;
  height: 200px;
  background-color: transparent;
  position: relative;
  top: 100px;
  right: -10px;

  border-radius: 35px;
`;

export const LabelInputBox = styled.div`
  display: flex;
  width: 350px;

  justify-content: space-between;
`;

export const StyledInput = styled.input`
  background-color: #eeeeee;
  border: 1px grey solid;
  border-radius: 10px;
  position: relative;
`;
