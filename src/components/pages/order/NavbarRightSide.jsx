import styled from "styled-components";
import theme from "../../../theme";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ToggleButton from "../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <ToggleButton />
      <div className="profile">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/">Log out</Link>
      </div>
      <IoPersonCircleOutline className="icon" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: ${theme.colors.greyBlue};

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
  }

  .icon {
    height: 36px;
    width: 36px;
    color: ${theme.colors.greyBlue};
    margin-left: 10px;
  }
`;
