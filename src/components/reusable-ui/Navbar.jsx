import styled from "styled-components";
import Logo from "../reusable-ui/Logo";
import theme from "../../theme";
import NavbarRightSide from "../pages/order/NavbarRightSide";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 70px 0 20px;
  background-color: ${theme.colors.white};
  border-radius: 15px 15px 0 0;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
`;
