import React from "react";
import AlertDialog from "../../Components/Dialog/DialogEx's/Alerts/Alerts";
import {Body} from "../../App.style";
import Typography from "../../Components/Typograhy/typography";
import ComponentViewDiv from "../../Components/Common/PreformattedTextElemant/componentsView";
import PreFormattedTextElement from "../../Components/Common/PreformattedTextElemant/PreFormattedTextElement";

export default function DialogPage() {
  return (
  <div>
    {// -------------------------------- ALERT Dialog --------------------------------------------

    }
    <Typography variant="h2">Dialog</Typography>
    <Typography>Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.</Typography>
    <Typography>
    A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
    </Typography>
    <br/>
    <br/>
    <br/>
    <br/>
    <Typography variant="h2">Basic Dialog</Typography>
    <Typography>
    Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).
    Touch mechanics:
    1- Choosing an option immediately commits the option and closes the menu
    2- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog
    </Typography>
    <ComponentViewDiv element={
      <>
      <AlertDialog/>
      </>
    } />
    <br />
    <br />
    <br />
    <PreFormattedTextElement textElement={`
      <ButtonDialog text='Open alert dialog' onClick={()=> setIsOpen(true)}/>

      <Dialog
          open={isOpen}
          setIsOpen={setIsOpen}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
          <DialogTitle  title={"Use Google's location service?"}/>
          <DialogContent>
                  Let Google help apps determine location. This means sending anonymous
                  location data to Google, even when no apps are running.
          </DialogContent>
          <DialogAction>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleClose} autoFocus>
                  Agree
              </Button>
          </DialogAction>
      </Dialog>
    `} />
  </div>);
}
