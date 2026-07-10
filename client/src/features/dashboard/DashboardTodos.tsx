import { Add } from "@mui/icons-material"
import { Paper, Box, Typography, Button, Divider, List, ListItem, Chip } from "@mui/material"
import { Link } from "react-router-dom"

const DashboardTodos = () => {
    return (
        <Paper elevation={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 2, px: 4, width: '100%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>TODO's</Typography>
                <Button variant="contained" startIcon={<Add />}><Typography>Add TODO</Typography></Button>
            </Box>
            <Divider sx={{ my: 2 }} />
            <List>
                <ListItem component={Link} to={'/'} sx={{
                    px: 2, py: 3, color: 'inherit', border: 0, borderLeftWidth: 4, borderStyle: 'solid', borderColor: 'blue', transition: 'all 200ms ease-in-out', "&:hover": {
                        paddingLeft: 3,
                    }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%' }}>
                        <Typography sx={{ flex: 1, marginRight: 1 }} noWrap>TodoTitle asdads sdadas aasdadsa sdadasdaasdads</Typography>
                        <Chip label="Done" variant="outlined" color="primary" />
                    </Box>
                </ListItem>
                <ListItem component={Link} to={'/'} sx={{
                    px: 2, py: 3, color: 'inherit', border: 0, borderLeftWidth: 4, borderStyle: 'solid', borderColor: 'blue', transition: 'all 200ms ease-in-out', "&:hover": {
                        paddingLeft: 3,
                    }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%' }}>
                        <Typography sx={{ flex: 1, marginRight: 1 }} noWrap>TodoTitle asdads sdadas aasdadsa sdadasdaasdads</Typography>
                        <Chip label="Done" variant="outlined" color="primary" />
                    </Box>
                </ListItem>
                <ListItem component={Link} to={'/'} sx={{
                    px: 2, py: 3, color: 'inherit', border: 0, borderLeftWidth: 4, borderStyle: 'solid', borderColor: 'blue', transition: 'all 200ms ease-in-out', "&:hover": {
                        paddingLeft: 3,
                    }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%' }}>
                        <Typography sx={{ flex: 1, marginRight: 1 }} noWrap>TodoTitle asdads sdadas aasdadsa sdadasdaasdads</Typography>
                        <Chip label="Done" variant="outlined" color="primary" />
                    </Box>
                </ListItem>
                <ListItem component={Link} to={'/'} sx={{
                    px: 2, py: 3, color: 'inherit', border: 0, borderLeftWidth: 4, borderStyle: 'solid', borderColor: 'blue', transition: 'all 200ms ease-in-out', "&:hover": {
                        paddingLeft: 3,
                    }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%' }}>
                        <Typography sx={{ flex: 1, marginRight: 1 }} noWrap>TodoTitle asdads sdadas aasdadsa sdadasdaasdads</Typography>
                        <Chip label="Done" variant="outlined" color="primary" />
                    </Box>
                </ListItem>
                <ListItem component={Link} to={'/'} sx={{
                    px: 2, py: 3, color: 'inherit', border: 0, borderLeftWidth: 4, borderStyle: 'solid', borderColor: 'blue', transition: 'all 200ms ease-in-out', "&:hover": {
                        paddingLeft: 3,
                    }
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%' }}>
                        <Typography sx={{ flex: 1, marginRight: 1 }} noWrap>TodoTitle asdads sdadas aasdadsa sdadasdaasdads</Typography>
                        <Chip label="Done" variant="outlined" color="primary" />
                    </Box>
                </ListItem>
            </List>
        </Paper>
    )
}
export default DashboardTodos