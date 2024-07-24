import styled from "styled-components";
import theme from "../../../theme";

export default function Main() {
  return (
    <MainStyled></MainStyled>
  )
}

const MainStyled = styled.div`
  flex: 1;
  background-color: #F5F5F7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;