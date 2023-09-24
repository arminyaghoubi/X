import { Grid } from '@mui/material'
import NavBar from './NavBar';
import Header from './Header';
import { useEffect } from 'react';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

export default observer(
    function App() {

        const { activityStore } = useStore();

        useEffect(() => {
            activityStore.getActivities();
        }, [activityStore]);

        //const handleSelectActivityDetails = (activity: Activity) => {
        //    activityStore.setSelectedActivityDetails(activity);
        //}

        //const handleCloseActivityDetails = () => {
        //    activityStore.setSelectedActivityDetails(undefined);
        //}

        //const handleCloseActivityForm = () => {
        //    activityStore.setFormMode("Create");
        //    activityStore.setSelectedActivityForm(undefined);
        //}

        //const handleSelectActivityForm = (activity: Activity, formMode: string) => {
        //    activityStore.setFormMode(formMode);
        //    activityStore.setSelectedActivityForm(activity);
        //}

        //const handleOpenCreateActivity = () => {
        //    const emptyActivity: Activity = {
        //        id: '',
        //        title: '',
        //        description: '',
        //        category: '',
        //        date: '',
        //        city: '',
        //        venue: '',
        //        creationDate: '',
        //        creatorId: '',
        //        lastModifiedDate: '',
        //        modifierId: ''
        //    }
        //    activityStore.setFormMode("Create");
        //    activityStore.setSelectedActivityForm(emptyActivity);
        //}

        //const handleSubmitForm = (activity: Activity) => {
        //    if (activityStore.formMode == "Create") {
        //        activityStore.createActivity(activity);
        //        handleCloseActivityForm();
        //    }
        //    else if (activityStore.formMode == "Edit") {
        //        activityStore.updateActivity(activity);
        //        handleCloseActivityForm();
        //    }
        //}

        //const handleDeleteActivity = (id: string) => {
        //    activityStore.deleteActivity(id);
        //}

        return (
            <div>

                <Grid container spacing={7} columns={12}>

                    <Grid item xs={12} alignItems="center">
                        <Header></Header>
                    </Grid>
                    <Grid item xs={12}>
                        <ActivityDashboard activities={activityStore.activities}></ActivityDashboard>
                    </Grid>
                    <Grid item xs={12}>
                        <NavBar></NavBar>
                    </Grid>
                </Grid >

                <LoadingComponent loading={activityStore.loading} />

            </div>
        )
    }
)