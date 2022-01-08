import React from "react";
import { Action, Content, ContentAction, MainCard } from "./Card.styles";
import img from "../../Assets/food.jpg";
import { Button } from "../Button";

const ProductCard = () => {
  return (
    <>
      <MainCard>
        <ContentAction padding="none" margin="none">
          <img
            src={img}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            alt=""
          />
        </ContentAction>
        <Action>
          <Button>Bye</Button>
        </Action>
      </MainCard>
    </>
  );
};

export default ProductCard;
