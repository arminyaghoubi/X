import { Grid } from '@mui/material'
import NavBar from './NavBar';
import Header from './Header';
import LoadingComponent from './LoadingComponent';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router-dom';

export default observer(
    function App() {

        return (
            <div>

                <Grid container spacing={7} columns={12}>

                    <Grid item xs={12} alignItems="center">
                        <Header></Header>
                    </Grid>
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                    <Grid item xs={12}>
                        <NavBar></NavBar>
                    </Grid>
                </Grid >

                <LoadingComponent />

            </div>
        )
    }
)