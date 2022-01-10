import React from 'react';
import { MainCard, Action } from '../../Components/Card/Card.styles';
import ComponentViewDiv from '../../Components/Common/PreformattedTextElemant/componentsView';
import Skeleton from '../../Components/skeleton/skeleton';
import Typography from '../../Components/Typograhy/typography';
import { Content } from '../HomePage/homePage.style';
import { Button  as ButtonC} from "../../Components/Common/Button";
import { SingleAvatar } from '../../Components/Avatar/Avatar';
import Image1 from '../AvatarPage/1.jpg'
import Image2 from '../AvatarPage/2.jpg'
import Image3 from '../AvatarPage/3.jpg'
const Usage = () => {
    return (
        <>
            <Typography variant='h1'>
                Usage
            </Typography>
            <Typography >
            OUR components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.
            </Typography>
            <Typography>
            You can use any of the components as demonstrated in the documentation. Please refer to each component's demo page to see how they should be imported.
            </Typography>
            <ComponentViewDiv element={
        <>
        <div style={{width: "90%"}}>
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
      <br />
      <br />
      <br />
      <br />
      <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <SingleAvatar kind='circular' avatar={<img src={Image1} alt='lkf' />} src={Image1}/>
      <SingleAvatar kind='circular' avatar={<img src={Image2} alt='lkf' />} src={Image2} />
      <SingleAvatar kind='circular' avatar={<img src={Image3} alt='lkf' />} src={Image3} />
      </div>
      </>
    } />

    <br />
    <br />
    <br />
    <br />
    <ComponentViewDiv element={
        <>
        <div style={{width: "90%" , textAlign: "center" , margin:'5%'}}>
          <Typography variant="h1">h1. Heading</Typography>
          <Typography variant="h2">h2. Heading</Typography>
          <Typography variant="h3">h3. Heading</Typography>
          <Typography variant="h4">h4. Heading</Typography>
          <Typography variant="h5">h5. Heading</Typography>
          <Typography variant="h6">h6. Heading</Typography>
          <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="span">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </div>
        </>
      } />
            </>
    );
}

export default Usage;
