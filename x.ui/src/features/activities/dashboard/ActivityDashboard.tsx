import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import { useEffect } from "react";


export default observer(
    function ActivityDashboard() {

        const { activityStore } = useStore();

        useEffect(() => {
            activityStore.getActivities();
        }, []);
        
        return (
            <div>
                <ActivityList activities={activityStore.activities} />

                {activityStore.selectedActivityDetails && <ActivityDetails />}

                {!activityStore.closeForm && <ActivityForm />}
            </div>

        )
    }
)