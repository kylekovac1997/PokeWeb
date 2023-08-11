import styled from "styled-components";

const TopFooterStyling = styled.div`
  width: 100%;
  height: 40px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  justify-content: center;
`;

const StyledAngles = styled.div`
  width: 900px;
  height: 10px;
  background: #ffffff;
  position: relative;
  clip-path: polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%);
`;

export const StyledFooterTop = () => {
  return (
    <TopFooterStyling>
      <StyledAngles />
    </TopFooterStyling>
  );
};
