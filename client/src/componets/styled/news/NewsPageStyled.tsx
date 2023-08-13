import styled from "styled-components";

export const NewsImage = styled.div`
  background-image: url("/src/images/appBackground/peakpx-modified.jpg");
  margin-top: 20px;
  width: 100%;
  height: 335px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: 280px;
  }

  & img {
    margin-bottom: 4px;
    position: relative;
    right: -200px;
    width: auto;
    height: auto;
    @media (max-width: 768px) {
      right: 0px;
    }
  }
`;
export const Feature1 = styled.div`
  width: 400px;
  height: 20px;
  background: #ffffff;
  position: relative;
  margin-top: 315px;
  margin-left: auto;
  clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
  @media (max-width: 768px) {
    margin-top: 45px;
    width: 200px;
    clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

export const NewsDate = styled.p`
  color: grey;
  font-size: 20px;
`;

export const NewsTitle = styled.h4`
  color: blue;
`;

export const NewsText = styled.p`
  color: #7c7c7c;
`;
