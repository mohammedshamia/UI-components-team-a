import * as React from 'react';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import ButtonDialog from "../../CommonComponents/Button";
import DialogContent from "../../DialogContent";
import {Button} from "../../CommonComponents/Button/Button.style";
import Dialog from "../../Dialog";
import DialogTitle from "../../DialogTitle";
import {useState} from "react";
import DialogAction from "../../DialogActions";

export default function AlertDialog() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <ButtonDialog text='Open alert dialog' onClick={()=> setIsOpen(true)}/>

            <Dialog
                open={isOpen}
                // onClose={handleClose}
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
        </div>
    );
}