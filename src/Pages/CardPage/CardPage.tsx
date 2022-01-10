import React from "react";
import { Button } from "react-scroll";
import Card from "../../Components/Card";
import BasicCard from "../../Components/Card/basicCard";
import { MainCard, Action, ContentAction, Header } from "../../Components/Card/Card.styles";
import ComplexCard from "../../Components/Card/complexCard";
import ProductCard from "../../Components/Card/productCard";
import ComponentViewDiv from "../../Components/Common/PreformattedTextElemant/componentsView";
import Typography from "../../Components/Typograhy/typography";
import { Content } from "../HomePage/homePage.style";
import { Button  as ButtonC} from "../../Components/Common/Button";
import PreFormattedTextElement from "../../Components/Common/PreformattedTextElemant/preformattedTextElement";
import { SingleAvatar } from "../../Components/Avatar/Avatar";
import img from '../../Assets/food.jpg';

export default function CardPage() {
  return (
    <div>
      {// --------------------------------------  SHOWING THE MAIN SECTION OF CARD --------------------------------------------

      }
    <Typography variant="h1" id = "General">Card</Typography>
      <Typography>Cards contain content and actions about a single subject.</Typography>
      <br />
      <br />
      <Typography>Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.</Typography>
      <br />
      <br />
      <br />
      
      {// ---------------------------------------- SHOWING THE BASIC CARD ---------------------------------------------------

      }
      <Typography variant="h2" id="Basic Card">Basic Card</Typography>
      <Typography>Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
</Typography>
<br />
<br />
      <ComponentViewDiv element={
        <>
        <div style={{width: "90%", margin:'5%'}}>
        <MainCard width="280px">
        <Content>
          <Typography variant='p' fontSize={16}>
            paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
              </Typography>
        </Content>

        <Action>
          <ButtonC> Follow </ButtonC>
        </Action>
      </MainCard>
        </div>
        </>
      } />

      <PreFormattedTextElement textElement={`
      <MainCard width="280px">
        <Content>
          <Typography variant='p' fontSize={16}>
            paragraph is a series of related sentences developing a central
            idea, called the topic. Try to think about paragraphs in terms of
            thematic unity: a paragraph is a sentence or a group of sentences
              </Typography>
        </Content>

        <Action>
          <ButtonC> Follow </ButtonC>
        </Action>
      </MainCard>
      `} />

<br />
<br />
<br />
<br />
      {// ----------------------------------- SHOWING CASE OF COMPLEX ---------------------------------------

      }
      <Typography variant="h2" id="Complex Interaction">Complex Interaction</Typography>
      <Typography>On desktop, card content can expand. (Click the downward chevron to view the recipe.)</Typography>
      <ComponentViewDiv element={
        <>
        <div style={{width: "90%" , margin:'5%'}}>
        <MainCard width="280px">
      <Header padding="15px">
        <SingleAvatar
          kind="circular"
          avatar={<img src={img} alt="Ikf" />}
          src={img}
        />
        <div style={{ marginLeft: "5px", marginTop:"5px" }}>
          <span>Shrimp and Chorizo Paella</span>
          <br />
          <span>September 14, 2016</span>
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
        <ButtonC background="none" color="#000">Follow</ButtonC>
      </Action>
    </MainCard>
        </div>
        </>
      } />
      <br />
      <br />
      <PreFormattedTextElement textElement={`
      <MainCard width="280px">
      <Header padding="15px">
        <SingleAvatar
          kind="circular"
          avatar={<img src={img} alt="Ikf" />}
          src={img}
        />
        <div style={{ marginLeft: "5px", marginTop:"5px" }}>
          <span>Shrimp and Chorizo Paella</span>
          <br />
          <span>September 14, 2016</span>
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
        <ButtonC background="none" color="#000">Follow</ButtonC>
      </Action>
    </MainCard>
      `} />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h2" id="Product Card">Product Card</Typography>
      <Typography>A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap.
      </Typography>
      <ComponentViewDiv element={
        <>
        <div style={{width: "90%"  , margin:'5%'}}>
        <MainCard width="280px">
        <ContentAction padding="none" margin="none">
          <img
            src={img}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            alt=""
          />
        </ContentAction>
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
          <ButtonC>Bye</ButtonC>
        </Action>
      </MainCard>
          </div>
        </>
      } />
      <br/>
      <br/>
      <PreFormattedTextElement textElement={`
        <MainCard width="280px">
        <ContentAction padding="none" margin="none">
          <img
            src={img}
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            alt=""
          />
        </ContentAction>
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
          <ButtonC>Bye</ButtonC>
        </Action>
      </MainCard>
      `} />
    </div>
  );
}
