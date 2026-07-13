import {z} from 'zod'
import { StateVal } from '../types/todo' 

export const todoSchema = z.object({
    title: z.string({error: 'Title is required'}).min(1, {message: 'Title is required'}),
    description: z.string({error: 'Title is required'}).min(1, {message: 'Title is required'}),
    estimatedTime: z.string().optional(),
    timeLogged: z.string().optional(),
    state: z.enum(StateVal)
});

export type TodoSchema = z.infer<typeof todoSchema>
