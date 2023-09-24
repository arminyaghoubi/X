import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useStore } from "../../../app/stores/store";

export default function ActivityDetails() {

    const { activityStore } = useStore();
    const { selectedActivityDetails: activity, setSelectedActivityDetails } = activityStore;

    return (
        <div>
            <Dialog
                open={Boolean(activity)}
                onClose={() => setSelectedActivityDetails(undefined)}
            >
                <DialogTitle>
                    {activity?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {activity?.date}
                        <br />
                        {activity?.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setSelectedActivityDetails(undefined)}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}