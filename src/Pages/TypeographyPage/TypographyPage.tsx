import React from "react";
import ComponentViewDiv from "../../Components/Common/PreformattedTextElemant/componentsView";
import PreFormattedTextElement from "../../Components/Common/PreformattedTextElemant/preformattedTextElement";
import Typography from "../../Components/Typograhy/typography";

export default function TypographyPage() {
  return (
    <div>
      <Typography variant="h1" id = "General">Typography</Typography>
      <Typography>Use typography to present your design and content as clearly and efficiently as possible.</Typography>
      <br />
      <br />
      <Typography variant="h2">General</Typography>
      <Typography>The Roboto font will not be automatically loaded by MUI. You are responsible for loading any fonts used in your application. Roboto Font has a few easy ways to get started. For more advanced configuration, check out the theme customization section.
      </Typography>
      <br />
      <br />
      <br />
      {// --------------------------- SHOWING CASE OF TYPOGHRAPHY ------------------------------------------

      }
      <Typography variant="h2" id = "Component">Component</Typography>
      <Typography>The Typography component makes it easy to apply a default set of font weights and sizes in your application.</Typography>
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
      <PreFormattedTextElement textElement={`
       <Typography variant="h1">h1. Heading</Typography>
       <Typography variant="h2">h2. Heading</Typography>
       <Typography variant="h3">h3. Heading</Typography>
       <Typography variant="h4">h4. Heading</Typography>
       <Typography variant="h5">h5. Heading</Typography>
       <Typography variant="h6">h6. Heading</Typography>
       <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. .
       </Typography>
       <Typography variant="span">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       </Typography>
      `} />

<br />
<br />
<br />

      {// --------------------------------------- SHOWING CASE OF CHANGING COLOR ----------------------------------

      }
      <Typography variant="h2" id="Theme">Changing Color</Typography>
      <Typography>In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the typography keys of the theme.
      </Typography>
      <ComponentViewDiv element={
        <>
        <div style={{width: "90%" , textAlign: "center" , margin:'5%'}}>
          <Typography variant="h1" color="#5484d1">h1. Heading</Typography>
          <Typography variant="h2" color="#2a916d">h2. Heading</Typography>
        </div>
        </>
      } />
      <PreFormattedTextElement textElement={`
      <Typography variant="h1" color="#5484d1">h1. Heading</Typography>
      <Typography variant="h2" color="#2a916d">h2. Heading</Typography>
      `}/>
    </div>
  );
}
