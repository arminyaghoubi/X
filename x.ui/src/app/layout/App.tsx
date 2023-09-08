import ButtonUsage from '../../ButtonUsage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import { Activity } from '../models/activity';
export default function App() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:7274/api/Activity').then(response => {
            setActivities(response.data);
        })
    },[])

    return (
        <div>
            <List>
                {activities.map(activity => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={activity.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className="card">
                <ButtonUsage></ButtonUsage>
            </div>
        </div>
    )
}
