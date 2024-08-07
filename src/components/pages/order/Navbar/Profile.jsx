import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../../theme";

export default function ({ username }) {
  return (
    <ProfileStyled>
      <div className="profile-info">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/">Log out</Link>
      </div>
      <IoPersonCircleOutline className="icon" />
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  padding-left: 50px;

  .profile-info {
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
