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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  height: 100vh;

  .container {
    display: flex;
    flex-direction: column;
    width: 1500px;
    height: 95vh;
  }
`;
