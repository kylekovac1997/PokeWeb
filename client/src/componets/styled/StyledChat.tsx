import styled from "styled-components";

export const StyledChatContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 730px;
  overflow-y: auto;
  position: relative;
`;

export const StyledChat = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  position: absolute;
  bottom: 0px;
  width: 900px;
  background-color: #f2f2f2;

  input {
    flex: 1;
    padding: 5px;
    border: none;
    border-radius: 4px;
    margin-right: 10px;
  }

  button {
    padding: 8px 15px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }
`;
