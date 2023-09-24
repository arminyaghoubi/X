import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState } from "react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

export default observer( function NavBar() {

    const { activityStore } = useStore();

    const styles = {
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    };

    const [value, setValue] = useState(0);

    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                sx={styles.stickToBottom}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                    if (newValue === 1) {
                        activityStore.openCreateActivity();
                        setValue(0);
                    }
                }}
            >
                <BottomNavigationAction label="Activities" icon={<ListAltIcon />} />
                <BottomNavigationAction label="Create" icon={<AddCircleOutlineIcon />} />
            </BottomNavigation>
        </div>
    )
})