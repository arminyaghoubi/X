import { Grid } from '@mui/material'
import NavBar from './NavBar';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

export default function App() {

    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        axios.get<Activity[]>('https://localhost:7274/api/Activity').then(response => {
            setActivities(response.data);
        })
    }, [])

    return (

        <Grid container spacing={7} columns={12}>

            <Grid item xs={12} alignItems="center">
                <Header></Header>
            </Grid>
            <Grid item xs={12}>
                <ActivityDashboard activities={activities}></ActivityDashboard>
            </Grid>
            <Grid item xs={12}>
                <NavBar></NavBar>
            </Grid>
        </Grid >
    )
}
