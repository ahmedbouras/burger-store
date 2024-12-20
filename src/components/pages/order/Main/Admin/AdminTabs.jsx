import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import theme from "../../../../../theme";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { tabsConfig } from "./tabsConfig";

export default function AdminTabs({
  showAdminPanel,
  selectedTab,
  showAdminContent,
}) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={showAdminPanel ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => showAdminContent(!showAdminPanel)}
        className={showAdminPanel ? "" : "dark-tab"}
      />
      {tabsConfig.map((tab, index) => (
        <Tab
          key={index}
          Icon={tab.icon}
          label={tab.label}
          onClick={() => showAdminContent(true, tab.name)}
          className={selectedTab === tab.name ? "dark-tab" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
  display: flex;

  button {
    margin-left: 1px;
  }

  .dark-tab {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
`;
