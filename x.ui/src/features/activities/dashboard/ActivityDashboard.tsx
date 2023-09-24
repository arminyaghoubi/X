import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";


interface Props {
    activities: Activity[];
}

export default observer(
    function ActivityDashboard({ activities }: Props) {

        const { activityStore } = useStore();

        return (
            <div>
                <ActivityList activities={activities} />

                {activityStore.selectedActivityDetails && <ActivityDetails />}

                {activityStore.selectedActivityForm && <ActivityForm />}
            </div>

        )
    }
)