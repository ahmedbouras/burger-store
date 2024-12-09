import { useParams } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../theme";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import AdminProvider from "../../context/AdminProvider";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <AdminProvider>
      <OrderPageStyled>
        <div className="container">
          <Navbar username={username} />
          <Main />
        </div>
      </OrderPageStyled>
    </AdminProvider>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
  height: 100vh;

  .container {
    border-radius: ${theme.borderRadius.extraRound};
    display: flex;
    flex-direction: column;
    width: 1400px;
    height: 95vh;
  }
`;
