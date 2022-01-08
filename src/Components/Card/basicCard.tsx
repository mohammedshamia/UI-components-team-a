import React from "react";
import { Button } from "../Common/Button";
import Typography from "../Typograhy/typography";
import { Action, MainCard, Content } from "./Card.styles";

const BasicCard = () => {
  return (
    <>
      <MainCard width="280px">
        <Content>
          <Typography variant='p' fontSize={16}>
            paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
              </Typography>
        </Content>

        <Action>
          <Button> Follow </Button>
        </Action>
      </MainCard>
    </>
  );
};

export default BasicCard;
