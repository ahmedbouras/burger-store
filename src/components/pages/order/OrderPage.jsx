import { useParams } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";
import Navbar from "../../reusable-ui/Navbar";
import Main from "./Main";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;

  .container {
    width: 1500px;
  }
`;
