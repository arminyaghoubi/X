import { AppBar, Avatar, Container, Toolbar } from "@mui/material";


export default function Header() {



    return (
        <AppBar>
            <Container>
                <Toolbar disableGutters>
                    <Avatar alt="X" src="/assets/XLogo.png" />
                </Toolbar>
            </Container>
        </AppBar>
    )
}