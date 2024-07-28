import styled from "styled-components";
import theme from "../../../theme";
import Card from "../../reusable-ui/Card";

export default function Main() {
  return (
    <MainStyled>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  flex: 1;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow-y: scroll;

  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 240px);
    gap: 60px 85px;
  }
`;
