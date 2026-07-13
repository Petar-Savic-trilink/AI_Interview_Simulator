import { Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, Grid, Paper, Skeleton, Typography } from "@mui/material"
import { useTodos } from "../../lib/hooks/useTodos"
import { formatTodoState, formatTodoTime } from "../../lib/utils/formatTodoData";
import { Link, useLocation } from "react-router-dom";
import type { MouseEvent } from "react";

const TodoListPage = () => {
    const { todos, isLoadingTodos, deleteTodo } = useTodos();
    const location = useLocation();

    const handleDelete = (e: MouseEvent, id: string) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTodo.mutateAsync(id);
    }
    return (
        <Grid container size={12} spacing={3}>
            <Grid size={9}>
                <Paper sx={{ p: 3 }} elevation={5}>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>TODO's</Typography>
                    <Divider sx={{ my: 3 }} />
                    {isLoadingTodos ? (
                        <Grid container spacing={3}>
                            <Grid size={6}>
                                <Skeleton variant="rounded" height={150} />
                            </Grid>
                            <Grid size={6}>
                                <Skeleton variant="rounded" height={150} />
                            </Grid>
                            <Grid size={6}>
                                <Skeleton variant="rounded" height={150} />
                            </Grid>
                            <Grid size={6}>
                                <Skeleton variant="rounded" height={150} />
                            </Grid>
                            <Grid size={6}>
                                <Skeleton variant="rounded" height={150} />
                            </Grid>
                            <Grid size={6}>
                                <Skeleton variant="rounded" height={150} />
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container size={12} spacing={3}>
                            {todos?.map(t => (
                                <Grid key={t.id} size={6} component={Link} to={`/editTodo/${t.id}`} state={{ prevLocation: location }} sx={{ textDecoration: 'none' }}>
                                    <Card elevation={3}>
                                        <CardHeader
                                            title={t.title}
                                            subheader={<Typography variant="caption">Estimated time: {formatTodoTime(t.estimatedTime ?? '')}</Typography>}
                                            action={<Chip variant="outlined" label={formatTodoState(t.state)} color="primary" />}
                                            slotProps={{
                                                title: {
                                                    sx: {
                                                        fontWeight: 'bold',
                                                        fontSize: 20
                                                    }
                                                }
                                            }} />
                                        <Divider sx={{ mb: 2 }} />
                                        <CardContent sx={{ p: 1 }}>
                                            <Box>
                                                <Typography variant="body2" sx={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}>{t.description}</Typography>
                                            </Box>
                                        </CardContent>
                                        <Divider sx={{ my: 1 }} />
                                        <CardActions sx={{ float: 'right' }}>
                                            <Button variant="outlined" color="error" onClick={(e) => handleDelete(e, t.id)}>Delete</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>)}

                </Paper>
            </Grid>
            <Grid size={3}>
                <Paper sx={{ height: 100 }} elevation={5}>filters</Paper>
            </Grid>
        </Grid>
    )
}
export default TodoListPage