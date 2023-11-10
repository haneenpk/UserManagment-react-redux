import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="">
        StylesCraze
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // errors
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confPasswordError, setConfPasswordError] = useState(false);

  function validateUsername(username) {
    if (username) {
      if (username.length < 4) {
        return "Username must be atleast 4 characters long";
      }
    } else {
      return "Username is required";
    }
  };

  function validateEmail(email) {
    if (email) {
      if (!email.includes('@') || !email.includes('.')) {
        return "Enter a valid email";
      }
    } else {
      return "Email is required";
    }
  };

  function validatePhone(phone) {
    if (phone) {
      if (!(/^\d{10}$/.test(phone))) {
        return "Enter a valid phone number";
      }
    } else {
      return "Phone number is required";
    }
  };

  function validatePassword(password) {
    if (password) {
      if (password.length < 8) {
        return "Password must be atleast 8 characters long";
      }
    } else {
      return "Password is required";
    }
  };

  function clearErrors() {
    setUsernameError(false);
    setEmailError(false);
    setPhoneError(false);
    setPasswordError(false);
    setConfPasswordError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearErrors();

    // validations
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isPasswordValid = validatePassword(password);
    const isConfPasswordValid = password === confPassword;
    // Update error states
    isUsernameValid && setUsernameError(isUsernameValid);
    isEmailValid && setEmailError(isEmailValid);
    isPhoneValid && setPhoneError(isPhoneValid);
    isPasswordValid && setPasswordError(isPasswordValid);
    !isConfPasswordValid && setConfPasswordError(true);

    console.log({
      username, email, phone, password, confPassword
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              error={usernameError}
              helperText={usernameError && usernameError}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={emailError}
              helperText={emailError && emailError}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="outlined-number"
              label="Phone"
              type="number"
              error={phoneError}
              helperText={phoneError && phoneError}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
              error={passwordError}
              helperText={passwordError && passwordError}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirm_password"
              autoComplete="confirm-password"
              error={confPasswordError}
              helperText={confPasswordError && 'Confirm Password is required'}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}