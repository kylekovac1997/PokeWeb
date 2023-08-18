import styled from "styled-components";

export const TopHeader = styled.div`
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhLNt1lSKPVrBb_11qTm9AE6KEiqvEeU1yzNQaeG539DyrjwsB04SeQQRp2Hv5JQ_cA&usqp=CAU");
  width: 100%;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  & Button {
    position: relative;
    top: 330px;
    right: 50px;
    float: right;
    width: 150px;
    margin: 10px;
  }
`;

export const ProfilePic = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  position: relative;
  border: 1px gold solid;
  bottom: 200px;
  background-color: grey;
`;

export const UserInfo = styled.div`
  display: block;

  width: 300px;
  height: 300px;
  position: relative;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMhLNt1lSKPVrBb_11qTm9AE6KEiqvEeU1yzNQaeG539DyrjwsB04SeQQRp2Hv5JQ_cA&usqp=CAU");
  background-size: cover;
  bottom: 150px;
  background-repeat: no-repeat;
  justify-content: center;
`;

export const UserDescription = styled.div`
  display: block;

  width: 570px;
  bottom: 150px;
  height: 300px;
  position: relative;
  justify-content: left;
`;
