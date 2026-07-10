import { Paper, Box, Avatar, Typography, LinearProgress } from "@mui/material"
import AlbumIcon from '@mui/icons-material/Album';

const DashboardHeader = () => {
    return (
        <Paper sx={{ display: 'flex', p: 4, gap: 5 }} elevation={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, width: '60%' }}>
                <Avatar variant="square" sx={{ height: 100, width: 100, borderRadius: 3 }} />
                <Typography variant="h4" noWrap sx={{ flex: 1 }}>FirstName LastName</Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <AlbumIcon fontSize="large" />
                <LinearProgress aria-label="done" variant="determinate" sx={{ height: 10, borderRadius: 10, width: '100%' }} value={70} />
                <Typography variant="h6">70% tier progress</Typography>
            </Box>
        </Paper>
    )
}
export default DashboardHeader