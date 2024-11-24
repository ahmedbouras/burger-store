import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import theme from "../../../../../theme";

export default function AdminTabs({ showAdminPanel, setShowAdminPanel, setSelectedTab }) {
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
        onClick={() => setSelectedTab('addProduct')}
        className={showAdminPanel ? "" : "hidden-panel"}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label={"Edit product"}
        onClick={() => setSelectedTab('editProduct')}
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
