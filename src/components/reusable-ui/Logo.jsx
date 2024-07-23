import styled from "styled-components";
import LogoImage from "../../assets/F03-logo-orange.png";
import theme from "../../theme";

export default function Logo({ className }) {
  return (
    <LogoStyled className={className}>
      <div className="logo-text">Crazee</div>
      <div>
        <img src={LogoImage} alt="burger logo" />
      </div>
      <div className="logo-text">Burger</div>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  
  .logo-text {
    color: ${theme.colors.primary_burger};
    font-family: "Amatic SC", sans-serif;
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  img {
    height: 60px;
    width: 80px;
    object-fit: contain;
  }
`;
