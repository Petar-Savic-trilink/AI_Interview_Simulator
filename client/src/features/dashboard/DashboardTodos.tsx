import { Add } from "@mui/icons-material"
import { Paper, Box, Typography, Button, Divider, List, ListItem, Chip, Skeleton } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import { useTodos } from "../../lib/hooks/useTodos"
import { formatTodoState } from "../../lib/utils/formatTodoData"
import { Fragment } from "react/jsx-runtime"

const DashboardTodos = () => {
    const { todos, isLoadingTodos } = useTodos();
    const location = useLocation();

    return (
        <Paper elevation={5}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 2, px: 4, width: '100%' }}>
                <Typography variant="h4" sx={{ textAlign: 'center' }}>TODO's</Typography>
                <Button variant="contained" component={Link} to="/createTodo" startIcon={<Add />}><Typography>Add TODO</Typography></Button>
            </Box>
            <Divider sx={{ my: 2 }} />
            {isLoadingTodos ?
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
                    <Skeleton height={50} variant="rounded" />
                    <Skeleton height={50} variant="rounded" />
                    <Skeleton height={50} variant="rounded" />
                    <Skeleton height={50} variant="rounded" />
                </Box> :
                <List>
                    {todos?.map(t => (
                        <Fragment key={t.id}>
                            <ListItem component={Link} to={`/editTodo/${t.id}`} state={{ prevLocation: location }} sx={{
                                px: 2, py: 3, color: 'inherit', border: 0, borderLeftWidth: 4, borderStyle: 'solid', borderColor: 'blue', transition: 'all 200ms ease-in-out', "&:hover": {
                                    paddingLeft: 3,
                                }
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                    <Typography sx={{ flex: 1, marginRight: 1 }} noWrap>{t.title}</Typography>
                                    <Chip label={formatTodoState(t.state)} variant="outlined" color="primary" />
                                </Box>
                            </ListItem>
                            <Divider sx={{"&:last-child":{display: 'none'}}}/>
                        </Fragment>
                    ))}

                </List>}
        </Paper>
    )
}
export default DashboardTodos