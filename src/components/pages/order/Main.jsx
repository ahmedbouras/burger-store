import styled from "styled-components";
import theme from "../../../theme";
import Card from "../../reusable-ui/Card";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { useState } from "react";

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
        <div className="admin">Admin</div>
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
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

  border: 2px green dashed;

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
    .admin {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #b8d4ec;
      height: 250px;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }
  }
`;
