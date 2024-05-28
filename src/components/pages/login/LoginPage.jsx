import styled from "styled-components";
import LoginForm from "./LoginForm";
import backgroundImage from "../../../assets/F03-burger-background.jpg"

export default function LoginPage() { 
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center / cover;
`