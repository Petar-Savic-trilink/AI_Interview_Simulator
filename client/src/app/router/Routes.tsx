import { createBrowserRouter } from "react-router-dom";
import App from '../layout/App'
import LoginPage from "../../features/auth/LoginPage";
import DashboardPage from "../../features/dashboard/DashboardPage";
import RequireAuth from "./RequireAuth";
import TodoListPage from "../../features/todos/TodoListPage";
import TodoForm from "../../features/todos/form/TodoForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <RequireAuth />,
                children: [
                    { path: '/dashboard', element: <DashboardPage /> },
                    { path: '/todos', element: <TodoListPage /> },
                    { path: '/createTodo', element: <TodoForm /> },
                    { path: '/editTodo/:id', element: <TodoForm /> },
                ]
            },
            { path: '/login', element: <LoginPage /> },
        ]
    }
])