import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState } from "react";

interface Props {
    onOpenCreateActivity: () => void;
}

export default function NavBar({ onOpenCreateActivity }: Props) {
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
                        onOpenCreateActivity();
                        setValue(0);
                    }
                }}
            >
                <BottomNavigationAction label="Activities" icon={<ListAltIcon />} />
                <BottomNavigationAction label="Create" icon={<AddCircleOutlineIcon />} />
            </BottomNavigation>
        </div>
    )
}