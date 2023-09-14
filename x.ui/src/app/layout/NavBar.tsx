import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState } from "react";
import ActivityForm from "../../features/activities/form/ActivityForm";

export default function NavBar() {
    const styles = {
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    };

    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);

    const onClose = () => {
        setValue(0);
        setOpen(false);
    }

    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                sx={styles.stickToBottom}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                    if (newValue == 1) {
                        setOpen(true);
                    }
                }}
            >
                <BottomNavigationAction label="Activities" icon={<ListAltIcon />} />
                <BottomNavigationAction label="Create" icon={<AddCircleOutlineIcon />} />
            </BottomNavigation>
            <ActivityForm open={open} onClose={onClose } />
        </div>
    )
}