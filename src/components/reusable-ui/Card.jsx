import styled from "styled-components";
import BurgerSmokeBBQ from "../../../public/images/burger-bacon-egg.png";
import theme from "../../theme";

export default function Card() {
  return (
    <CardStyled>
      <div className="product-img">
        <img src={BurgerSmokeBBQ} alt="" />
      </div>

      <div className="product-info">
        <h3 className="product-name">Burger Smoke BBQ</h3>

        <div className="product-purchase">
          <p className="product-price">5,60 $</p>
          <button type="button" className="product-action">
            Add
          </button>
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

  .product-img {
    width: 200px;
    height: 145px;
  }

  .product-info {
    width: 200px;
    height: 110px;
    padding: 0 5px 5px 5px;

    .product-name {
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      text-align: center;
      width: 100%;
    }

    .product-purchase {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 66px;

      .product-price {
        color: ${theme.colors.primary};
      }
    }
  }
`;
