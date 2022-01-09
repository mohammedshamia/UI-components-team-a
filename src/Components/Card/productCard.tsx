import React from "react";
import { Action, Content, ContentAction, MainCard } from "./Card.styles";
import img from "../../Assets/animal.jpg";
import { Button } from "../Common/Button";
import Typography from "../Typograhy/typography";

const ProductCard = () => {
  return (
    <>
      <MainCard width="280px">
        <ContentAction padding="none" margin="none">
          <img
            src={img}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            alt=""
          />
        </ContentAction>
        <Content>
          <Typography variant="p">
            {" "}
            paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
            that supports one central, unified idea. Paragraphs add one idea at
            a time to your broader argument.
          </Typography>
        </Content>
        <Action>
          <Button>Bye</Button>
        </Action>
      </MainCard>
    </>
  );
};

export default ProductCard;
