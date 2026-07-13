import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../lib/hooks/useAuth"
import { Typography } from "@mui/material";

const RequireAuth = () => {
    const { currentUser, isLoadingUser } = useAuth();

    if (isLoadingUser) return <Typography>Loading...</Typography>

    if (!currentUser) return <Navigate to='/login' />

    return (
        <Outlet />
    )
}
export default RequireAuth