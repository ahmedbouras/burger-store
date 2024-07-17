import styled from "styled-components";
import theme from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon ?? Icon}
      <input value={value} onChange={onChange} {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 55px;
  margin: 18px 0;
  padding: 18px 24px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};

  input {
    width: 100%;
    margin-left: ${theme.spacing.sm};
    border: none;
    outline: none;
  }
`;
