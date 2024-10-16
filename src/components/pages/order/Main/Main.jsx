import styled from "styled-components";
import theme from "../../../../theme";
import Admin from "./Admin/Admin";
import Menu from "./Menu";

export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        <Admin />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: calc(95vh - 10vh);
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.borderRadius.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  /* .basket {
    background-color: pink;
  } */

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`;
