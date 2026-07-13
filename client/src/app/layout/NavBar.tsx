import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ height: 'auto' }}>
                <Toolbar sx={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>
                        <Typography component={NavLink} to={'/dashboard'} sx={{ fontSize:18, textDecoration: 'none', color: 'inherit', '&.active': { textDecoration: 'underline', fontWeight: 'bold' } }}>Home</Typography>
                        <Typography component={NavLink} to={'/todos'} sx={{ fontSize:18, textDecoration: 'none', color: 'inherit', '&.active': { textDecoration: 'underline', fontWeight: 'bold' } }}>Todos</Typography>
                        <Typography component={NavLink} to={'/quizzes'} sx={{ fontSize:18, textDecoration: 'none', color: 'inherit', '&.active': { textDecoration: 'underline', fontWeight: 'bold' } }}>Quizzes</Typography>
                    </Box>
                    <Avatar sx={{float: 'right'}} />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavBar