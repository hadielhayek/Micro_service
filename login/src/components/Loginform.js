import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardMedia } from '@mui/material';
import image from '../images/image.svg'




const theme = createTheme();

 function Loginform( {Login,error}) {
 
    const [details,setDetails]=useState({username:'',password:''});
     const submitHandler =e =>{
        e.preventDefault();
        Login(details);
     }

  return (
    <Box sx={{}}>
  
     
    <ThemeProvider theme={theme}  >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            mr:30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
       
          <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={details.username}
              autoFocus
              onChange={e=> setDetails({...details,username:e.target.value})}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={details.password}
              autoComplete="current-password"
              onChange={e=> setDetails({...details,password:e.target.value})}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <CardMedia
        component="img"
        image={image}
        alt="green veg"
        sx={{mt:-40,ml:50}}
        
      />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </Box>
    
  );
}
export default  Loginform
