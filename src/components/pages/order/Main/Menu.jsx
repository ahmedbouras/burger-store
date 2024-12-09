import { useState } from "react";
import Card from "../../../reusable-ui/Card";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import styled from "styled-components";

export default function Menu() {
  const [products, setProducts] = useState(fakeMenu);

  return (
    <MenuStyled>
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.imageSource}
          title={product.title}
          price={product.price}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
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
`;
