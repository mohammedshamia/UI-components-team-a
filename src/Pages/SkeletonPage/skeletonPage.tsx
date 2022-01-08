import React from "react";
import ComponentViewDiv from "../../Components/Common/PreformattedTextElemant/componentsView";
import PreFormattedTextElement from "../../Components/Common/PreformattedTextElemant/PreFormattedTextElement";
import Skeleton from "../../Components/skeleton/skeleton";
import Typography from "../../Components/Typograhy/typography";

export default function SkeletonPage() {
  return( 
    <div>
      <Typography variant="h1">Skeleton</Typography>
      <Typography variant="p">Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.</Typography>
      <Typography variant="p">The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen (Cf. Avoid The Spinner).
      </Typography>
      <br/>
      <br/>
      <br/>
      <Typography variant="h2">Usage</Typography>
      <Typography variant="p">The component is designed to be used directly in your components. For instance:</Typography>
      <PreFormattedTextElement textElement={`
      {
        item ? (
          <img
            style={{
              width: 210,
              height: 118,
            }}
            alt={item.title}
            src={item.src}
          />
        ) : (
          <Skeleton variant="rectangular" width={210} height={118} />
        );
      }
      `} />
      <br />
      {// ----------------------------- SHOWING CASE OF VARIANT -------------------------------------

      }
      <Typography variant="h2">Variant</Typography>
      <Typography>The component supports 3 shape variants:</Typography>
      <ComponentViewDiv element={
        <>
        <div style={{alignContent: 'center', textAlign: 'center'}}>
          <Skeleton variant="text" width="300px"/>
          <Skeleton variant="circular" width="80px" height="80px"/>
          <Skeleton variant="rectangular" width="300px" height="200px"/>
        </div>
        </>
      } />
      <br />
      <PreFormattedTextElement textElement={`
      <Skeleton variant="text" width="300px"/>
      <Skeleton variant="circular" width="80px" height="80px"/>
      <Skeleton variant="rectangular" width="300px" height="200px"/>
      `} />
      {// --------------------------- SHOWING CASE OF ANIMATIONS ------------------------------------
      }
      <Typography variant="h2">Animations</Typography>
      <Typography variant="p">By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely.</Typography>
      <ComponentViewDiv element={
        <>
        <div style={{alignContent: 'center', textAlign: 'center'}}>
          <Skeleton variant="text" width="300px" animation="pulse"/>
          <Skeleton variant="text" width="300px" animation="pulse"/>
          <Skeleton variant="text" width="300px" animation="wave"/>
        </div>
        </>
      } />
      <br />
      <PreFormattedTextElement textElement={`
      <Skeleton variant="text" width="300px" animation="pulse"/>
      <Skeleton variant="text" width="300px" animation="pulse"/>
      <Skeleton variant="text" width="300px" animation="wave"/>
      `} />
      {// --------------------------- SHOWING CASE OF ANIMATIONS ------------------------------------
      }
    </div>
    );
}
