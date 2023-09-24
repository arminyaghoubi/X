import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { useState } from "react";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export default observer( function NavBar() {

    const { activityStore } = useStore();

    const styles = {
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
    };

    const [value, setValue] = useState("Home");

    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                sx={styles.stickToBottom}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                    if (newValue === "CreateActivity") {
                        activityStore.openCreateActivity();
                        setValue("Activities");
                    }
                }}
            >
                <BottomNavigationAction component={Link} to="" label="Home" value="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction component={Link} to="activities" label="Activities" value="Activities" icon={<ListAltIcon />} />
                <BottomNavigationAction label="Create" value="CreateActivity" icon={<AddCircleOutlineIcon />} />
            </BottomNavigation>
        </div>
    )
})