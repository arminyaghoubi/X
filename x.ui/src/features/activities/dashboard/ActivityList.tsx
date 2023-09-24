import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
    activities: Activity[];
}

export default observer(
    function ActivityList({ activities }: Props) {

        const { activityStore } = useStore();

        return (
            <div>
                {activities.map(activity => (
                    <Card key={activity.id} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {activity.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {activity.date}
                            </Typography>
                            <Typography variant="body2">
                                ({activity.category})
                                <br />
                                {activity.description}
                                <br />
                                {activity.city}, {activity.venue}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick={() => activityStore.setSelectedActivityDetails(activity)} variant="outlined" size="small">View</Button>
                            <Button onClick={() => activityStore.openUpdateActivity(activity)} variant="outlined" size="small">Update</Button>
                            <Button onClick={() => activityStore.deleteActivity(activity.id)} variant="outlined" size="small">Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        )
    }
)