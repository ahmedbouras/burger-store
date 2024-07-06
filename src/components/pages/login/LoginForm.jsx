import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  let navigate = useNavigate();

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername("");
    navigate(`/order/${username}`)
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
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
      <button type="submit">Access to your account</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
display: flex;
flex-direction: column;
padding-top: 60px;
  color: white;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: 700;
  }

  hr {
    border: 1px solid #F56A2C;
    width: 400px;
    margin-top: 32px;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
  }

  .input-container {
    display: flex;
    align-items: center;
    width: 400px;
    height: 55px;
    margin: 18px 0;
    padding: 18px 24px;
    background-color: white;
    border-radius: 5px;
  }

  .person-circle {
    color: #747B91;
  }

  input {
    width: 100%;
    margin-left: 12px;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
    width: 400px;
    height: 55px;
    background-color: orange;
    color: white;
    border-radius: 5px;
    border: 1px solid orange;
  }
`