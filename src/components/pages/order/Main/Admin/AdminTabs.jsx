import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import theme from "../../../../../theme";

export default function AdminTabs({ showAdminPanel, setShowAdminPanel }) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={showAdminPanel ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setShowAdminPanel(!showAdminPanel)}
        className={showAdminPanel ? "" : "hidden-panel"}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  .hidden-panel {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`;
