import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";


interface Props {
    activities: Activity[];
    selectedActivityDetails: Activity | undefined;
    onSelectActivityDetails: (activity: Activity) => void;
    onCloseActivityDetails: () => void;
    selectedActivityForm: Activity | undefined;
    onSelectActivityForm: (activity: Activity,formMode:string) => void;
    onCloseActivityForm: () => void;
    formMode: string;
    onSubmitForm: (activity: Activity) => void;
}

export default function ActivityDashboard({ activities,
    selectedActivityDetails, onSelectActivityDetails, onCloseActivityDetails,
    selectedActivityForm, onSelectActivityForm, onCloseActivityForm, formMode, onSubmitForm }: Props) {

    return (
        <div>
            <ActivityList activities={activities} onClickViewDetails={onSelectActivityDetails} onClickUpdate={onSelectActivityForm} />

            {selectedActivityDetails && <ActivityDetails activity={selectedActivityDetails} open={Boolean(selectedActivityDetails)} onClose={onCloseActivityDetails} />}

            {selectedActivityForm &&
                <ActivityForm activity={selectedActivityForm} open={Boolean(selectedActivityForm)} onClose={onCloseActivityForm} mode={formMode} onSubmitForm={onSubmitForm} />}
        </div>

    )
}