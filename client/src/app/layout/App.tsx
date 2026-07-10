import { Box, Container, CssBaseline } from '@mui/material'
import NavBar from './NavBar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    if(location.pathname === '/') navigate('/dashboard')
  },[location, navigate])
  return (
    <Box sx={{minHeight:'100vh', backgroundColor: '#eee'}}>
    <CssBaseline />
        <>
          {(location.pathname !== '/login' && location.pathname !== '/register') && <NavBar />}
          <Container maxWidth='xl' sx={{ pt: (location.pathname !== '/login' && location.pathname !== '/register') ? 12 : 0, pb: 5 }}>
            <Outlet />
          </Container>
        </>
    </Box>
  )
}

export default App
