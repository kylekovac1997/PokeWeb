import { StyledFooterTop } from "../componets/styled/footer/FooterStyling";

const Footer = () => {
  return (
    <>
      <StyledFooterTop />
      <div
        style={{
          backgroundColor: "black",
          position: "relative",
          top: "90",
          width: "100%",
          height: "100px",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Pokemon Company. All rights
          reserved.
        </p>
        <p>Designed and developed by Kyle Kovac</p>
      </div>
    </>
  );
};

export default Footer;
