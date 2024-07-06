import styled from "styled-components";
import LoginForm from "./LoginForm";
import backgroundImage from "../../../assets/F03-burger-background.jpg";
import Logo from "../../Logo";

export default function LoginPage() {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center / cover;
`;
