import styled from "styled-components";
import theme from "../../theme";

export default function PrimaryButton({ Icon, label, type, className }) {
  return (
    <PrimaryButtonStyled className={className} type={type}>
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
