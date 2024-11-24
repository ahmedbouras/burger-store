import styled from "styled-components";
import theme from "../../theme/index";

export default function Tab({ Icon, onClick, className, label = null }) {
  console.log(label);

  return (
    <TabStyled onClick={onClick} className={className}>
      <div className="icon">{Icon}</div>
      {label && <div className="label">{label}</div>}
    </TabStyled>
  );
}

const TabStyled = styled.button`
  display: flex;
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

  .icon {
    display: flex;
    align-items: center;
  }

  .label {
    margin-left: 13px;
    &:hover {
      border-bottom: 2px solid ${theme.colors.greySemiDark};
      line-height: 1.5;
    }
  }
`;
