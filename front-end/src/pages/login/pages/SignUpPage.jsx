import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import classes from './signinPage.module.css'
// import useAxios from '../../hooks/use-axios';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const theme = createTheme();



// gestion avec la DB
export default function SignUp() {
  const [error, setError] = useState();
  const errorHandler = () => {setError(null)};
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  axios.post('http://localhost:5000/auth/signup', {
    name: data.get('name'),
    pseudo: data.get('pseudo'),
    email: data.get('email'),
    password: data.get('password')},{
    withCredentials: true,})
    .then(response => {
      navigate('/cart');

    })
    .catch(error => {
      setError({message: 'INFORMATION INCORRECT.'})
    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Container onClick={errorHandler} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="pseudo"
              label="pseudo"
              type="pseudo"
              id="pseudo"
              autoComplete="current-pseudo"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="current-email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {error && <p className={classes.error} >{error.message}</p> }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}