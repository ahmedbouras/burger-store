import styled from "styled-components";
import LogoImage from "../assets/F03-logo-orange.png";
import theme from "../theme/index";

export default function Logo() {
  return (
    <LogoContainer>
      <div className="logo-text">Crazee</div>
      <div>
        <img src={LogoImage} alt="burger logo" />
      </div>
      <div className="logo-text">Burger</div>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 680px;
  color: ${theme.colors.primary_burger};
  text-transform: uppercase;

  .logo-text {
    font-family: "Amatic SC", sans-serif;
    font-size: 110px;
    font-weight: ${theme.fonts.weights.bold};
  }

  img {
    height: 150px;
  }
`;
