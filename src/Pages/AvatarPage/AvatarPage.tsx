import React from "react";
import { SingleAvatar } from "../../Components/Avatar/Avatar";
import { Avatar } from "../../Components/Avatar/Avatar.style";
import AvatarGroup from "../../Components/AvatarGroup/AvatarGroup";
import ComponentViewDiv from "../../Components/Common/PreformattedTextElemant/componentsView";
import PreFormattedTextElement from "../../Components/Common/PreformattedTextElemant/preformattedTextElement";
import Typography from "../../Components/Typograhy/typography";
import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'

export default function AvatarPage() {
  return (
  <div>
    <Typography variant='h1'>
      Avatar
    </Typography>
    <Typography variant="p" >
    Avatars are found throughout material design with uses in everything from tables to dialog menus.
    </Typography>

    <br/>
    <br/>
    <br/>
    {// -------------------------ADDING SECTION OF IMAGE AVATAR--------------------------
    }
    <Typography variant="h2" id="Image Avatars">Image Avatar</Typography>
    <Typography>Image avatars can be created by passing standard img props src or srcSet to the component.</Typography>
    <br/>
    <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <SingleAvatar kind='circular' avatar={<img src={Image1} alt='lkf' />} src={Image1}/>
      <SingleAvatar kind='circular' avatar={<img src={Image2} alt='lkf' />} src={Image2} />
      <SingleAvatar kind='circular' avatar={<img src={Image3} alt='lkf' />} src={Image3} />
      </div>
      </>
    } />
    <br/>
    <PreFormattedTextElement textElement={`
        <SingleAvatar kind='circular' src={Image1}/>
        <SingleAvatar kind='circular' src={Image2} />
        <SingleAvatar kind='circular' src={Image3} />
    `} />
    <br/>
    {// -----------------------ADDING SECTION OF LETTER AVATAR----------------------
    }
    <Typography variant="h2" id="Letter Avatars">Avatar Letters</Typography>
    <Typography>Avatars containing simple characters can be created by passing a string as children.</Typography>
    <br/>
    <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <SingleAvatar kind='circular' avatar={"Ahmad Saleh"} />
      <SingleAvatar kind='circular' avatar={"Feras Al-Helou"} />
      <SingleAvatar kind='circular' avatar={"Mohammed Ali"} />
      <SingleAvatar kind='circular' avatar={"Lubna Abd"} />
      <SingleAvatar kind='circular' avatar={"Rola Ghanima"} />
      </div>
      </>
    } />
    <br/>
    <PreFormattedTextElement textElement={`
        <SingleAvatar kind='circular' avatar={"Ahmad Saleh"} />
        <SingleAvatar kind='circular' avatar={"Feras Al-Helou"} />
        <SingleAvatar kind='circular' avatar={"Mohammed Ali"} />
        <SingleAvatar kind='circular' avatar={"Lubna Abd"} />
        <SingleAvatar kind='circular' avatar={"Rola Ghanima"} />
    `} />
    <br/>
    {//------------------SHOWING CASE IN CHANGING BACKGROUND COLOR------------------------

    }
    <Typography variant="h3" id="Sizes">Changing Background Color</Typography>
    <Typography>You can use different background colors for the avatar. The following demo generates the color based on the name of the person.</Typography>
    <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <SingleAvatar kind='circular' avatar={"Ahmad Saleh"} backgroundColor="#044e4f" />
      <SingleAvatar kind='circular' avatar={"Feras Al-Helou"} backgroundColor="#548022" />
      <SingleAvatar kind='circular' avatar={"Mohammed Ali"} backgroundColor="#87703d" />
      <SingleAvatar kind='circular' avatar={"Lubna Abd"} backgroundColor="#873380" />
      <SingleAvatar kind='circular' avatar={"Rola Ghanima"} backgroundColor="#4a3aa6" />
      </div>
      </>
    } />
    <br/>
    <PreFormattedTextElement textElement={`
        <SingleAvatar kind='circular' avatar={"Ahmad Saleh"} backgroundColor="#044e4f" />
        <SingleAvatar kind='circular' avatar={"Feras Al-Helou"} backgroundColor="#548022" />
        <SingleAvatar kind='circular' avatar={"Mohammed Ali"} backgroundColor="#87703d" />
        <SingleAvatar kind='circular' avatar={"Lubna Abd"} backgroundColor="#873380" />
        <SingleAvatar kind='circular' avatar={"Rola Ghanima"} backgroundColor="#4a3aa6" />
    `} />
    <br/>
    <br/>
    {//----------------SHOWING CASE IN CHANGING KIND OF COMPONENT--------------------

    }
    <Typography variant="h2" id="Icon Avatars">Avatar Kinds - Variants</Typography>
    <Typography>Avatars containing simple characters can be created by passing a string as children.</Typography>
    <br/>
    <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <SingleAvatar kind='square' avatar={<img src={Image1} alt='lkf' />} src={Image1}/>
      <SingleAvatar kind='circular' avatar={"Ahmad Saleh"} />
      <SingleAvatar kind='rounded' avatar={<img src={Image3} alt='lkf' />} src={Image3} />
      </div>
      </>
    } />
    <br/>
    <PreFormattedTextElement textElement={`
    <SingleAvatar kind='square' src={Image1}/>
    <SingleAvatar kind='circular' avatar={"Ahmad Saleh"} />
    <SingleAvatar kind='rounded' src={Image3} />
    `} />
    <br/>
    <br/>
    <br/>
    {// -------------------------------- SHOWING CASE IN GROUPED COMPONENTS AVATAR ----------------------------------

    }
    <Typography variant="h2" id="Grouped Avatars">Avatar Kinds - Variants</Typography>
    <Typography>AvatarGroup renders its children as a stack. Use the max prop to limit the number of avatars.</Typography>
    <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <AvatarGroup kind={'circular'} avatars={['Ahmad Saleh','Mohammed Ali','Rola Ghanima','Lubna Abd', 'Feras Al-Helou']} displayAllOnHover={true} max={2} size={60} />
      </div>
      </>
    } />
    <br />
    <br />
    {// ----------------------------- SHOWING CASE IN GROUP AND HOVER ---------------------------------------

    }
    <Typography id="Animation Group Avatar">If you need to control the total number of avatars not shown, you can use the <pre style={{display: 'inline', fontSize: '15px'}}>max</pre> prop</Typography>
    <br/>
    <ComponentViewDiv element={
      <>
      <div style={{display: 'flex', justifyContent:'space-evenly'}}>
      <AvatarGroup kind={'circular'} avatars={['Ahmad Saleh','Mohammed Ali','Rola Ghanima','Lubna Abd', 'Feras Al-Helou']} displayAllOnHover={true} max={3} size={60} />
      </div>
      </>
    } />
    <br/>
    <PreFormattedTextElement textElement={`
    <AvatarGroup kind={'circular'} avatars={['Ahmad Saleh','Mohammed Ali','Rola Ghanima','Lubna Abd', 'Feras Al-Helou']} displayAllOnHover={true} max={1} size={60} />
    `} />

  </div>
  );
}
