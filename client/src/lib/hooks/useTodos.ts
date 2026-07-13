import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { httpAgent } from "../utils/httpAgent"
import type { Todo } from "../types/todo";

export const useTodos = (id?: string) => {
    const queryClient = useQueryClient();
    const {data: todos, isLoading: isLoadingTodos} = useQuery({
        queryKey: ['todos'],
        queryFn: async () => {
            const result = await httpAgent.get<Todo[]>('/todos');

            return result.data;
        }
    })

    const {data: todo, isLoading: isLoadingTodo} = useQuery({
        queryKey: ['todos', id],
        queryFn: async () => {
            const result = await httpAgent.get<Todo>(`/todos/${id}`);

            return result.data
        },
        enabled: !!id
    })

    const createTodo = useMutation({
        mutationFn: async (todo: Todo) => {
            await httpAgent.post('/todos', todo)
        },
    })

    const updateTodo = useMutation({
        mutationFn: async (todo: Todo) => {
            await httpAgent.put(`/todos/${todo.id}`, todo);
        }
    })


    const deleteTodo = useMutation({
        mutationFn: async (id: string) => {
            await httpAgent.delete(`/todos/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['todos']
            })
        }
    })

    return {todos, isLoadingTodos, todo, isLoadingTodo, createTodo, updateTodo, deleteTodo}
}