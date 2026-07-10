import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlined from '@mui/icons-material/MenuOutlined'

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{height:'auto'}}>
                <Toolbar sx={{height: 48}}>
                    <IconButton
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuOutlined />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default NavBar