import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonUsage from './ButtonUsage'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
export default function App() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7274/WeatherForecast').then(response => {
            setActivities(response.data);
        })
    },[])

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <List>
                {activities.map((activity: any) => (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={activity.summary} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div className="card">
                <ButtonUsage></ButtonUsage>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}
