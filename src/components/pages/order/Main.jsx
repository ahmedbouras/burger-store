import styled from "styled-components";
import theme from "../../../theme";
import Card from "../../reusable-ui/Card";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { useState } from "react";

export default function Main() {
  const [products, setProducts] = useState(fakeMenu);

  return (
    <MainStyled>
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
    </MainStyled>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  flex: 1;
  background-color: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow-y: scroll;

  .card-container {
    display: grid;
    //j-c: center; +  repeat(4, 1fr)
    grid-template-columns: repeat(4, 240px);
    gap: 60px 85px; // delete 85px
  }
`;
