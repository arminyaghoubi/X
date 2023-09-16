import { Backdrop, CircularProgress } from "@mui/material";

interface Props {
    loading: boolean;
}

export default function LoadingComponent({ loading }: Props) {

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    )
}