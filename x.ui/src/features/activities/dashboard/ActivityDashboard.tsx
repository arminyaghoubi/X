import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard({ activities }: Props) {

    return (

            <List >
                {activities.map(activity => (
                    <ListItem key={activity.id}>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={activity.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

    )
}