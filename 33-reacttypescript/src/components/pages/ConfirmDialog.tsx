import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
    title:string,
    open:boolean,
    content: string,
    // agreeButtonName: string,
    // disAgreeButtonName: string,
    onClose: (res:boolean) => void
}

// const example = {
//     title : "Example",
//     contentText: "Example Content",
//     agreeButtonName: "Agree 1",
//     disAgreeButtonName: "Disagree 2",
//
// }

const ConfirmDialog: React.FC<Props> = (props: Props) => {

    // const [open, setOpen] = React.useState(false);
    // const handleClickOpen = () => {
    //     setOpen(true);
    //     alert(111);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    //     alert(0);
    // };

    return (
        <Dialog
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.contentText}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ () => props.onClose (false) }color="primary">
                    Disagree
                </Button>
                <Button onClick={ () => props.onClose (true) } color="primary" autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>

    );
}
export default ConfirmDialog;