import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Grid, Rating } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const reviewData = {
      name: data.get("userName"),
      country: data.get("location"),
      reviewTxt: data.get("reviewTxt"),
      rating: data.get("rating"),
    };
    // const reviewData = {};
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      };
      const url = await fetch("http://localhost:3001/reviews", options);
      console.log(url);
      alert(`Your data has been submitted`);
      navigate("/admin-dashboard/add-review");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            fontSize: "inherit",
            alignItems: "center",
            width: 80 % "",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.primary" }}></Avatar>
          <Typography component="h1" variant="h6">
            Add Review
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="Full name"
                  autoFocus
                />
              </Grid>{" "}
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-country"
                  name="location"
                  required
                  fullWidth
                  id="location"
                  label="Your country, city name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-review"
                  name="reviewTxt"
                  required
                  fullWidth
                  id="reviewTxt"
                  label="Describe your experience"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography component="legend">Rate from 0 - 5</Typography>
                <Rating name="rating" id="rating" label="Rating" />{" "}
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
