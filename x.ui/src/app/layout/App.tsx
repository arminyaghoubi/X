import { Grid } from '@mui/material'
import NavBar from './NavBar';
import Header from './Header';
import { useEffect, useState } from 'react';
import { Activity } from '../models/activity';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(
    function App() {

        const { activityStore } = useStore();

        const [selectedActivityDetails, setSelectedActivityDetails] = useState<Activity | undefined>(undefined);
        const [selectedActivityForm, setSelectedActivityForm] = useState<Activity | undefined>(undefined);
        const [formMode, setFormMode] = useState("Create");

        useEffect(() => {
            activityStore.getActivities();
        }, []);

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
                activityStore.createActivity(activity);
                handleCloseActivityForm();
            }
            else if (formMode == "Edit") {
                activityStore.updateActivity(activity);
                handleCloseActivityForm();
            }
        }

        const handleDeleteActivity = (id: string) => {
            activityStore.deleteActivity(id);
        }

        return (
            <div>

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
                            activities={activityStore.activities}
                            formMode={formMode}
                            onSubmitForm={handleSubmitForm}
                            onDeleteActivity={handleDeleteActivity}
                        ></ActivityDashboard>
                    </Grid>
                    <Grid item xs={12}>
                        <NavBar onOpenCreateActivity={handleOpenCreateActivity}></NavBar>
                    </Grid>
                </Grid >

                <LoadingComponent loading={activityStore.loading} />

            </div>
        )
    }
)