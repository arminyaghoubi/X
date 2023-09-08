import { useEffect, useState } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

export default function App() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:7274/api/Activity').then(response => {
            setActivities(response.data);
        })
    }, [])

    return (
        <div>
            <List>
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
            <NavBar></NavBar>
        </div>
    )
}
