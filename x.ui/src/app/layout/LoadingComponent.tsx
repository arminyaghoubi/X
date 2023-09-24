import { Backdrop, CircularProgress } from "@mui/material";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";


export default observer(
    function LoadingComponent() {

        const { activityStore } = useStore();
        const { loading } = activityStore;

        return (
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        )
    }
)