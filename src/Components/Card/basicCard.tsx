import React from "react";
import { Button } from "../Button";
import { Action, MainCard, Content } from "./Card.styles";

const BasicCard = () => {
  return (
    <>
      <MainCard>
        <Content>
          <p>
            paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
            that supports one central, unified idea. Paragraphs add one idea at
            a time to your broader argument.
          </p>
        </Content>

        <Action>
          <Button> Follow </Button>
        </Action>
      </MainCard>
    </>
  );
};

export default BasicCard;
