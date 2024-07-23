import styled from "styled-components";

export default function Main() {
  return (
    <MainStyled>Main</MainStyled>
  )
}

const MainStyled = styled.div`
  flex: 1;
  background-color: #F5F5F7;
  box-shadow: 0px 8px 20px 8px #00000033 inset;
  border-radius: 0 0 15px 15px;
`;