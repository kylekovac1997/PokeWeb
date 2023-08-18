import styled from "styled-components";

export const StyledMessageArea = styled.div`
  border: 2px solid gold;
  width: 900px;
  height: 800px;
`;

export const StyledFriendsArea = styled.div`
  border: 2px solid gold;
  width: 200px;
  position: relative;
  height: 800px;
  & p {
    position: relative;
    top: 40px;
    justify-content: center;
    align-items: center;

    &:hover {
      border: 2px solid blue;
      background-color: aliceblue;
    }
  }
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1200px;
`;
