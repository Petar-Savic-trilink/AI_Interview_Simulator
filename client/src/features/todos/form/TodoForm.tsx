import { Box, Button, Paper, Typography } from "@mui/material"
import { useForm } from 'react-hook-form'
import { todoSchema, type TodoSchema } from "../../../lib/schemas/todoSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../../app/shared/TextInput";
import SelectInput from "../../../app/shared/SelectInput";
import { todoStateFormValues } from "./stateValues";
import { useTodos } from "../../../lib/hooks/useTodos";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { Todo } from "../../../lib/types/todo";

const TodoForm = () => {
    const { id } = useParams();
    const { todo, isLoadingTodo, createTodo, updateTodo } = useTodos(id);
    const location = useLocation().state?.prevLocation ?? '/dashboard';
    const navigate = useNavigate();
    const { control, handleSubmit, reset } = useForm<TodoSchema>({
        mode: 'onTouched',
        resolver: zodResolver(todoSchema)
    });

    const onSubmit = (data : TodoSchema) => {
        if(todo){
            updateTodo.mutateAsync({id: todo.id, ...data} as Todo);
        } else {
            createTodo.mutateAsync(data as Todo);
        }
    }


    const handleCancel = () => {
        navigate(location);
        reset();
    }

    useEffect(() => {
        if (todo) {
            reset(todo)
        } else {
            reset();
        }
    }, [todo, reset])

    if (isLoadingTodo && id) return <Typography>Loading...</Typography>
    if(!todo && id) return <Typography>Something went wrong</Typography>

    return (
        <Paper elevation={5} component='form' onSubmit={handleSubmit(onSubmit)} sx={{ p: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', mb: 3 }}>{todo ? "Edit Todo" : "New Todo"}</Typography>
            <TextInput control={control} label="Title" name="title" />
            <TextInput control={control} label="Description" name="description" multiline rows={4} />
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: 3 }}>
                <TextInput control={control} label="Estimated Time" name="estimatedTime" />
                <TextInput control={control} label="Time Logged" name="timeLogged" />
                <SelectInput items={todoStateFormValues} defaultValue={todo ? undefined : 1} disabled={todo ? false : true} label="State" name="state" control={control} />
            </Box>
            <Box sx={{margin: 'auto', display: 'flex', gap: 3}}>
                <Button variant="contained" sx={{px: 4, py: 1}} type="submit">Submit</Button>
                <Button variant="outlined" color="error" sx={{px: 4, py: 1}} onClick={handleCancel}>Cancel</Button>
            </Box>
        </Paper>
    )
}
export default TodoForm