import styled from "styled-components";
import ToggleButton from "../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../../../theme";

export default function NavbarRightSide({ username }) {
  const [toggle, setToggle] = useState(false);

  const notify = () => {
    toast.info("Admin mode enabled", {
      theme: "dark",
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    if (toggle) notify();
  }, [toggle]);

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={toggle}
        onToggle={() => setToggle(!toggle)}
        labelIfChecked="Disable Admin mode"
        labelIfUnchecked="Enable Admin mode"
      />
      <Profile username={username} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
