import styled from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const notifyAdminMode = () => {
    if (!isAdmin) {
      toast.info("Admin mode enabled", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsAdmin(!isAdmin)
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isAdmin}
        onToggle={notifyAdminMode}
        labelIfChecked="Disable Admin mode"
        labelIfUnchecked="Enable Admin mode"
      />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
`;
