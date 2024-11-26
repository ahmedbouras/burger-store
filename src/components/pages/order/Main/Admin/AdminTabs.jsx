import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import theme from "../../../../../theme";

export default function AdminTabs({ showAdminPanel, selectedTab, showAdminContent }) {
  return (
    <AdminTabsStyled>
      <Tab
        Icon={showAdminPanel ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => showAdminContent(!showAdminPanel)}
        className={showAdminPanel ? "" : "dark-tab"}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        label={"Add product"}
        onClick={() => showAdminContent(true, "addProduct")}
        className={selectedTab === "addProduct" ? "dark-tab" : ""}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label={"Edit product"}
        onClick={() => showAdminContent(true, "editProduct")}
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
