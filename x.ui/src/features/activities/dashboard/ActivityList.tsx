import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
    onClickViewDetails: (activity: Activity) => void;
    onClickUpdate: (activity: Activity,formMode:string) => void;
}

export default function ActivityList({ activities, onClickViewDetails, onClickUpdate }: Props) {
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
                        <Button onClick={() => onClickViewDetails(activity)} variant="outlined" size="small">View</Button>
                        <Button onClick={() => onClickUpdate(activity,"Edit")} variant="outlined" size="small">Update</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}