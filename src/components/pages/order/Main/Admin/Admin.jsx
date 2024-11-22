import styled from "styled-components";
import AdminTabs from "./AdminTabs";
import AdminPanel from "./AdminPanel";
import { useState } from "react";

export default function Admin() {
  const [showAdminPanel, setShowAdminPanel] = useState(true);

  return (
    <AdminStyled>
      <AdminTabs
        showAdminPanel={showAdminPanel}
        setShowAdminPanel={setShowAdminPanel}
      />
      {showAdminPanel && <AdminPanel />}
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;
