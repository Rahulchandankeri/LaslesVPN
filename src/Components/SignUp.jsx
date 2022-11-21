import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import LinkM from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      };
      const url = await fetch("http://localhost:3001/users", options);
      alert(`Account created!`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            width: "26rem",
            border: "1px solid #d3d3d375",
            fontSize: "1.2rem",
            padding: "1rem 1.5rem 1rem 1.5rem",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.primary" }}></Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  sx={{ my: 2 }}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  sx={{ my: 2 }}
                />
              </Grid>
            </Grid>
            <Button type="submit" variant="inherit" fullWidth sx={{ mt: 3, mb: 2, py: 1 }} className="cta-btn-3">
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Grid item>
                <Link to="/sign-in" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
