import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { MouseEventHandler } from "react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity?: Activity;
    open: boolean;
    onClose: MouseEventHandler;
}

export default function ActivityDetails({ activity, open, onClose }: Props) {

    return (
        <div>
            <Dialog
                open={open}
                onClose={onClose}
            >
                <DialogTitle>
                    {activity?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {activity?.date}
                        <br />
                        {activity?.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}