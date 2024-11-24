import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import theme from "../../../../../theme";

export default function AdminTabs({ showAdminPanel, setShowAdminPanel, selectedTab, setSelectedTab }) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={showAdminPanel ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setShowAdminPanel(!showAdminPanel)}
        className={showAdminPanel ? "" : "dark-tab"}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        label={"Add product"}
        onClick={() => setSelectedTab('addProduct')}
        className={selectedTab === "addProduct" ? "dark-tab" : ""}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label={"Edit product"}
        onClick={() => setSelectedTab('editProduct')}
        className={selectedTab === "editProduct" ? "dark-tab" : ""}
      />
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
