import styled from "styled-components";
import theme from "../../../../../theme";

export default function AdminPanel({selectedTab}) {
  return <AdminPanelStyled>{selectedTab}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 250px;
  background-color: ${theme.colors.white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.borderRadius.subtle};
`;
