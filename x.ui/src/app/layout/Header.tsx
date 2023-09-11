import { AppBar, Avatar, Container, Toolbar } from "@mui/material";


export default function Header() {



    return (
        <AppBar color="primary">
            <Container>
                <Toolbar disableGutters>
                    <Avatar alt="X" src="/assets/XLogo.png" sx={{ margin: '0 auto !important' }} />
                </Toolbar>
            </Container>
        </AppBar>
    )
}