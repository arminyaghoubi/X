import { AppBar, Button, Dialog, FormControl, IconButton, Slide, TextField, Toolbar, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import { MouseEventHandler, forwardRef, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";

interface Props {
    activity?: Activity;
    open: boolean;
    onClose: () => void;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ActivityForm({ activity, open, onClose }: Props) {

    const [value, setValue] = useState<Dayjs | null>(dayjs(activity?.date));

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
        >

            <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        Activity
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <FormControl>
                <TextField type="text" variant="standard" label="Title" defaultValue={activity?.title} />
                <br />
                <TextField type="text" variant="standard" label="Category" defaultValue={activity?.category} />
                <br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date" value={value} onChange={(newValue) => setValue(newValue)} />
                </LocalizationProvider>
                <br />
                <TextField type="text" variant="standard" label="City" defaultValue={activity?.city} />
                <br />
                <TextField type="text" variant="standard" label="Venue" defaultValue={activity?.venue} />
                <br />
                <TextField type="text" variant="standard" label="Description" defaultValue={activity?.description} multiline rows={4} />
                <br />
                <Button variant="outlined" color="primary">Submit</Button>
            </FormControl>

        </Dialog>
    )
}