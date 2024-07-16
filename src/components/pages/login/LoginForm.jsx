import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import theme from "../../../theme";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    navigate(`/order/${username}`);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Welcome to our store!</h1>
      <hr />
      <h2>Log in</h2>

      <div className="input-container">
        <IoPersonCircleOutline className="person-circle" />
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">
        <span>Access to your account</span>
        <MdArrowForwardIos className="arrow-btn" />
      </button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  color: ${theme.colors.white};
  text-align: center;

  h1 {
    font-size: ${theme.fonts.size.P5};
    font-weight: ${theme.fonts.weights.bold};
  }

  hr {
    border: 1px solid ${theme.colors.hrline};
    width: 400px;
    margin-top: ${theme.spacing.lg};
    margin-bottom: 40px;
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    font-weight: ${theme.fonts.weights.bold};
  }

  .input-container {
    display: flex;
    align-items: center;
    width: 400px;
    height: 55px;
    margin: 18px 0;
    padding: 18px 24px;
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
  }

  .person-circle {
    color: ${theme.colors.greyBlue};
  }

  input {
    width: 100%;
    margin-left: ${theme.spacing.sm};
    border: none;
    outline: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 400px;
    height: 55px;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.primary};
    &:hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};
    }
    &:active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }

  .arrow-btn {
    margin-left: ${theme.spacing.xs};
  }
`;