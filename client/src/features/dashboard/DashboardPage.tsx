import { Grid } from "@mui/material"
import DashboardHeader from "./DashboardHeader";
import DashboardTodos from "./DashboardTodos";
import DashboardQuizzes from "./DashboardQuizzes";

const DashboardPage = () => {
    return (
        <Grid container spacing={3} size={12}>
            <Grid size={12}>
                <DashboardHeader />
            </Grid>
            <Grid size={4}>
                <DashboardTodos />
            </Grid>
            <Grid size={8}>
                <DashboardQuizzes />
            </Grid>
        </Grid>
    )
}
export default DashboardPage