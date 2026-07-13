import { Box, Button, Paper, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useAuth } from "../../lib/hooks/useAuth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useAuth();

    const handleSubmit = async () => {
        console.log(email, password)
        await login.mutateAsync({email, password});
    }

  return (
    <Box sx={{width: '100%', height:'100vh', display:'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper elevation={4} sx={{width: '60%', minHeight:'70vh', display:'flex'}}>
            <Box sx={{width:'40%'}}>
                <Box>a</Box>
            </Box>
            <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap:5, padding:5 }}>
                <Typography variant="h4">Login</Typography>
                <TextField variant="outlined" value={email} sx={{width:'100%'}} type="email" label="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
                <TextField variant="outlined" value={password} sx={{width:'100%'}} type="password" label="Password" onChange={(e) => setPassword(e.currentTarget.value)} />
                <Button variant="outlined" sx={{width: '50%'}} onClick={handleSubmit}>Submit</Button>
            </Box>
        </Paper>
    </Box>
  )
}
export default LoginPage