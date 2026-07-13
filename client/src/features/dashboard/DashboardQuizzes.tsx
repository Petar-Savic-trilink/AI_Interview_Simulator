import { Add } from "@mui/icons-material"
import { Paper, Box, Typography, Button, Divider, Grid } from "@mui/material"
import QuizCard from "../../app/shared/QuizCard"

const DashboardQuizzes = () => {
    return (
        <Paper elevation={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 2, px: 4, width: '100%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>Quizzes</Typography>
                <Button variant="contained" startIcon={<Add />}><Typography>Start new</Typography></Button>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Grid container spacing={2} sx={{ p: 2 }}>
                <Grid size={6}>
                    <QuizCard />
                </Grid>
                <Grid size={6}>
                    <QuizCard />
                </Grid>
            </Grid>
        </Paper>
    )
}
export default DashboardQuizzes