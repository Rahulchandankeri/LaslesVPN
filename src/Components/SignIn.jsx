import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkM from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <LinkM color="inherit" href="/">
        LaslesVPN
      </LinkM>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "26rem",
            padding: "4rem 1.5rem 4rem 1.5rem",
            border: "1px solid #d3d3d375",
            borderRadius: "5px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "grey" }}>{/* <LockOutlinedIcon /> */}</Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ my: 2 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              sx={{ my: 2 }}
              autoComplete="current-password"
            />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
            <Button type="submit" variant="inherit" fullWidth sx={{ my: 2, py: 1 }} className="cta-btn-3 ">
              Sign In
            </Button>
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs>
                <LinkM href="#" variant="body2">
                  Forgot password?
                </LinkM>
              </Grid>
              <Grid item>
                <Link to={"/sign-up"} variant="body2">
                  {"Don't have an account? Sign Up"}
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
