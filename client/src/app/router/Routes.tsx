import { createBrowserRouter } from "react-router-dom";
import App from '../layout/App'
import LoginPage from "../../features/LoginPage";
import DashboardPage from "../../features/dashboard/DashboardPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path: '/login', element: <LoginPage /> },
            {path: '/dashboard', element: <DashboardPage /> }
        ]
    }
])