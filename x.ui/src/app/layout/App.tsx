import { Grid } from '@mui/material'
import NavBar from './NavBar';
import Header from './Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

export default function App() {

    const [activities, setActivities] = useState<Activity[]>([]);
    const [selectedActivityDetails, setSelectedActivityDetails] = useState<Activity | undefined>(undefined);
    const [selectedActivityForm, setSelectedActivityForm] = useState<Activity | undefined>(undefined);
    const [formMode, setFormMode] = useState("Create");

    useEffect(() => {
        getActivities();
    }, []);

    const getActivities = () => {
        axios.get<Activity[]>('https://localhost:7274/api/Activity').then(response => {
            setActivities(response.data);
        })
    }

    const handleSelectActivityDetails = (activity: Activity) => {
        setSelectedActivityDetails(activity);
    }

    const handleCloseActivityDetails = () => {
        setSelectedActivityDetails(undefined);
    }

    const handleCloseActivityForm = () => {
        setFormMode("Create");
        setSelectedActivityForm(undefined);
    }

    const handleSelectActivityForm = (activity: Activity, formMode: string) => {
        setFormMode(formMode);
        setSelectedActivityForm(activity);
    }

    const handleOpenCreateActivity = () => {
        const emptyActivity: Activity = {
            id: '',
            title: '',
            description: '',
            category: '',
            date: '',
            city: '',
            venue: '',
            creationDate: '',
            creatorId: '',
            lastModifiedDate: '',
            modifierId: ''
        }
        setFormMode("Create");
        setSelectedActivityForm(emptyActivity);
    }

    const handleSubmitForm = (activity: Activity) => {
        if (formMode == "Create") {
            axios.post('https://localhost:7274/api/Activity', activity).then(response => {
                if (response.status === 200) {
                    getActivities();
                    handleCloseActivityForm();
                }
            })
        }
        else if (formMode == "Edit") {
            axios.put('https://localhost:7274/api/Activity', activity).then(response => {
                if (response.status === 204) {
                    getActivities();
                    handleCloseActivityForm();
                }
            })
        }
    }

    const handleDeleteActivity = (id: string) => {
        axios.delete(`https://localhost:7274/api/Activity/${id}`).then(response => {
            if (response.status === 204) {
                getActivities();
            }
        })
    }

    return (

        <Grid container spacing={7} columns={12}>

            <Grid item xs={12} alignItems="center">
                <Header></Header>
            </Grid>
            <Grid item xs={12}>
                <ActivityDashboard onSelectActivityDetails={handleSelectActivityDetails}
                    onCloseActivityDetails={handleCloseActivityDetails}
                    selectedActivityDetails={selectedActivityDetails}
                    onCloseActivityForm={handleCloseActivityForm}
                    onSelectActivityForm={handleSelectActivityForm}
                    selectedActivityForm={selectedActivityForm}
                    activities={activities}
                    formMode={formMode}
                    onSubmitForm={handleSubmitForm}
                    onDeleteActivity={handleDeleteActivity}
                ></ActivityDashboard>
            </Grid>
            <Grid item xs={12}>
                <NavBar onOpenCreateActivity={handleOpenCreateActivity}></NavBar>
            </Grid>
        </Grid >
    )
}
