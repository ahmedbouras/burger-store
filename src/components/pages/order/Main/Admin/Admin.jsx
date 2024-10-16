import styled from "styled-components";
import theme from "../../../../../theme";

export default function Admin() {
  return <AdminStyled>Admin</AdminStyled>;
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: ${theme.colors.white};
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.borderRadius.subtle};

`;
