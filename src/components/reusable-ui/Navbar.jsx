import styled from "styled-components";
import Logo from "../reusable-ui/Logo";
import theme from "../../theme";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <div className="right-side">
        <div className="profile">
          <p>
            Hey, <span>{username}</span>
          </p>
          <a href="">Log out</a>
        </div>
        <IoPersonCircleOutline className="icon" />
      </div>
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

  .right-side {
    display: flex;
    align-items: center;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${theme.colors.greyBlue};
  }

  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.fonts.weights.bold};
  }

  a {
    font-size: ${theme.fonts.size.XXS};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 4px;
    }

    &:visited {
      color: ${theme.colors.greyBlue};
    }
  }

  .icon {
    height: 36px;
    width: 36px;
    color: ${theme.colors.greyBlue};
    margin-left: 10px;
  }
`;