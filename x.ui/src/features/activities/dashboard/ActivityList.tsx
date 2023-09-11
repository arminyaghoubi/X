import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
}

export default function ActivityList({ activities }: Props) {
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
                        <Button variant="outlined" size="small">View</Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}