import styled from "styled-components";
import theme from "../../theme";
import PrimaryButton from "./PrimaryButton";
import { round } from "../../utils/math";

export default function Card({ image, title, price }) {
  return (
    <CardStyled>
      <img src={image} alt="product image" />
      <div className="product-img"></div>

      <div className="product-info">
        <h3 className="product-name">{title}</h3>

        <div className="product-purchase">
          <p className="product-price">{round(price)} $</p>

          <PrimaryButton
            label={"Add to Cart"}
            type={"button"}
            className={"product-button"}
          />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  width: 240px;
  padding: 50px 20px 10px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);

  img {
    object-fit: contain;
    width: 200px;
    height: 145px;
  }

  .product-info {
    width: 200px;
    height: 110px;
    margin-top: 15px;
    padding: 0 5px 5px 5px;

    .product-name {
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      text-align: left;
      width: 190px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .product-purchase {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: -5px;
      height: 66px;

      .product-price {
        color: ${theme.colors.primary};
      }

      .product-button {
        width: 95px;
        height: 38px;
      }
    }
  }
`;
