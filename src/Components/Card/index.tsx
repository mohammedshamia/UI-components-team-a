import React, { FC } from "react";
import img from "../../Assets/profile.jpg";
import { Button } from "../Common/Button";
import {
  MainCard,
  Content,
  Header,
  Action,
  ContentAction,
  CardMedia,
} from "./Card.styles";

const Card: FC = () => {
  return (
    <>
      <MainCard width="200px" flexDirection="column">
        <Header> </Header>
        <ContentAction>
          <CardMedia src={img} />
        </ContentAction>
        <Action>
          <Button background="none">click</Button>
        </Action>
      </MainCard>
    </>
  );
};

export default Card;
