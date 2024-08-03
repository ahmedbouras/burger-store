import styled from "styled-components";
import ToggleButton from "../../reusable-ui/ToggleButton";
import Profile from "./Profile";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
  const [toggle, setToggle] = useState(false);

  return (
    <NavbarRightSideStyled>
      <ToggleButton
      isChecked={toggle}
      onToggle={() => setToggle(!toggle)}
      labelIfChecked="Disable Admin mode"
      labelIfUnchecked="Enable Admin mode"
      />
      <Profile username={username} />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
`;
