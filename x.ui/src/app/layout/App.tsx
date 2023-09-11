import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import Header from './Header';

export default function App() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:7274/api/Activity').then(response => {
            setActivities(response.data);
        })
    }, [])

    return (
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

            <Box gridColumn="span 12">
                <Header></Header>
            </Box>
            <Box gridColumn="span 12" sx={{
                margin: '40px 0',
            }}>
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
            </Box>
            <Box gridColumn="span 12">
                <NavBar></NavBar>
            </Box>
        </Box>
    )
}
