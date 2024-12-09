import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";
import { getTabContent } from "./tabsConfig";

export default function Admin() {
  const [showAdminPanel, setShowAdminPanel] = useState(true);

  const [selectedTab, setSelectedTab] = useState("add");

  const tabContent = getTabContent(selectedTab);
  
  const showAdminContent = (showPanel, tabName) => {
    if (tabName) setSelectedTab(tabName);
    setShowAdminPanel(showPanel);
  };

  return (
    <AdminStyled>
      <AdminTabs
        showAdminPanel={showAdminPanel}
        selectedTab={selectedTab}
        showAdminContent={showAdminContent}
      />
      {showAdminPanel && <AdminPanel content={tabContent} />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
