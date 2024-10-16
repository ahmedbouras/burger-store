import styled from "styled-components";
import theme from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import Admin from "./Admin/Admin";

export default function Main() {
  const [products, setProducts] = useState(fakeMenu);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <div className="card-container">
          {products.map((product) => (
            <Card
              key={product.id}
              image={product.imageSource}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <Admin />
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* flex: 1; */
  height: calc(95vh - 10vh);
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.borderRadius.strong};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  /* .basket {
    background-color: pink;
  } */

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
    .card-container {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, 240px);
      gap: 60px 85px; // delete 85px
      padding: 50px;
      overflow-y: scroll;
      //-ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      &::-webkit-scrollbar {
        display: none; // TODO : Verify if it's necessary
      }
    }
  }
`;
