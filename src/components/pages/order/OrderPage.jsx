import { useParams } from "react-router-dom";
import ButtonReturn from "../../ButtonReturn";
import styled from "styled-components";
import theme from "../../../theme"

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <h1>Hello {username}</h1>
      <ButtonReturn text={"Log out"} />
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
`