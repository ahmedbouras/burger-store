import styled from "styled-components";
import theme from "../../theme";

export default function PrimaryButton({ Icon, label, type }) {
  return (
    <PrimaryButtonStyled type={type}>
      <span>{label}</span>
      {Icon ?? Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 400px;
  height: 55px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
