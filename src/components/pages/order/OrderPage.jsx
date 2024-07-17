import { useParams } from "react-router-dom";
import ButtonReturn from "../../ButtonReturn";
import styled from "styled-components";
import theme from "../../../theme";
import Navbar from "../../reusable-ui/Navbar";
import Main from "./Main";

export default function OrderPage() {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
        {/* <h1>Hello {username}</h1>
        <ButtonReturn text={"Log out"} /> */}
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
