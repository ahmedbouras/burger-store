import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import theme from "../../../../../theme";

export default function AdminTabs({ showAdminPanel, setShowAdminPanel }) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={showAdminPanel ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setShowAdminPanel(!showAdminPanel)}
        className={showAdminPanel ? "" : "hidden-panel"}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        label={"Add product"}
        onClick={() => setShowAdminPanel(!showAdminPanel)}
        className={showAdminPanel ? "" : "hidden-panel"}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  button {
    margin-left: 1px;
  }

  .hidden-panel {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`;
