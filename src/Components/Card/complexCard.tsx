import React from "react";
import {
  Action,
  CardMedia,
  Content,
  ContentAction,
  Header,
  MainCard,
} from "./Card.styles";
import img from "../../Assets/food.jpg";
import { Button } from "../Common/Button";
import { SingleAvatar } from "../Avatar/Avatar";
import Typography from "../Typograhy/typography";

const ComplexCard = () => {
  return (
    <MainCard width="280px">
      <Header padding="15px">
        <SingleAvatar
          kind="circular"
          avatar={<img src={img} alt="Ikf" />}
          src={img}
        />
        <div style={{ marginLeft: "5px", marginTop: "5px" }}>
          <Typography variant="span">Shrimp and Chorizo Paella</Typography>
          <br />
          <Typography variant="span">September 14, 2016</Typography>
        </div>
      </Header>
      <ContentAction>
        <img src={img} style={{ height: "100%", width: "100%" }} alt="" />
      </ContentAction>
      <Action>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="FavoriteIcon"
          style={{ width: "50px", height: "50px" }}
        >
          <path d="m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
        </svg>
        <Button background="none" color="#000">
          Follow
        </Button>
      </Action>
    </MainCard>
  );
};

export default ComplexCard;
