import styled from "styled-components";
import theme from "../../theme/index";

export default function Tab({ Icon }) {
  return <TabStyled>{Icon}</TabStyled>;
}

const TabStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 1px;
  left: 71px;
  height: 43px;
  padding: 0 22px;
  font-size: ${theme.fonts.size.P0};
  color: ${theme.colors.greySemiDark};
  background-color: ${theme.colors.white};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  box-shadow: ${theme.shadows.subtle};
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid ${theme.colors.white};
  }
`;
