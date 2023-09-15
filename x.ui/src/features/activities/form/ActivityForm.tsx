import { AppBar, Button, Dialog, FormControl, IconButton, Slide, TextField, Toolbar, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, forwardRef, useEffect, useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from "dayjs";

interface Props {
    activity: Activity;
    open: boolean;
    mode: string,
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

export default function ActivityForm({ activity: initialState, mode, open, onClose }: Props) {


    const [activity, setActivity] = useState<Activity>(initialState);
    const [value, setValue] = useState<Dayjs | null>(dayjs(initialState.date));

    useEffect(() => {
        setActivity(initialState);
    }, []);


    const onSubmit = () => {
        console.log(activity);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value });
    }

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
                        { mode} Activity
                    </Typography>
                </Toolbar>
            </AppBar>
            <br />
            <FormControl>
                <TextField type="text" variant="standard" name="title" label="Title" defaultValue={activity.title} onChange={handleInputChange} />
                <br />
                <TextField type="text" variant="standard" label="Category" defaultValue={activity.category} onChange={handleInputChange} />
                <br />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker label="Date" value={value} onChange={(newValue) => setValue(newValue)} />
                </LocalizationProvider>
                <br />
                <TextField type="text" variant="standard" label="City" defaultValue={activity.city} />
                <br />
                <TextField type="text" variant="standard" label="Venue" defaultValue={activity.venue} />
                <br />
                <TextField type="text" variant="standard" label="Description" defaultValue={activity.description} multiline rows={4} />
                <br />
                <Button variant="outlined" color="primary" onClick={onSubmit}>Submit</Button>
            </FormControl>

        </Dialog>
    )
}