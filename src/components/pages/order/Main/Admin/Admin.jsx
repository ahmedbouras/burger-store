import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

export default function Admin() {
  const [showAdminPanel, setShowAdminPanel] = useState(true);

  const [selectedTab, setSelectedTab] = useState('addProduct');
  const TABS = {
    'addProduct': <AddProduct />,
    'editProduct': <EditProduct />
  }

  const showAdminContent = (showPanel, tabContent) => {
    setShowAdminPanel(showPanel);
    if (tabContent) setSelectedTab(tabContent)
  }
  
  return (
    <AdminStyled>
      <AdminTabs
        showAdminPanel={showAdminPanel}
        selectedTab={selectedTab}
        showAdminContent={showAdminContent}
      />
      {showAdminPanel && <AdminPanel tabs={TABS} selectedTab={selectedTab} />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
