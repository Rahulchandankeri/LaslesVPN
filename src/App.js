import "./App.css";
import "../src/Assets/Styles/sass/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar";
import Featured from "./Components/Featured";
import OurFeatures from "./Components/OurFeatures";
import Plan from "./Components/Plan";
import OurNetwork from "./Components/OurNetwork";
import Testimonials from "./Components/Testimonials";
import Subscribe from "./Components/Subscribe";
import Footer from "./Components/Footer";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AdminLogin from "./Components/Admin/AdminLogIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <React.Fragment>
              <NavBar />
              <Featured />
              <OurFeatures />
              <Plan />
              <OurNetwork />
              <Testimonials />
              <Subscribe />
              <Footer />
            </React.Fragment>
          }
        />
        <Route
          path={"/sign-in"}
          element={
            <React.Fragment>
              {" "}
              <NavBar />
              <SignIn /> <Footer />
            </React.Fragment>
          }
        />
        <Route
          path={"/sign-up"}
          element={
            <React.Fragment>
              {" "}
              <NavBar />
              <SignUp />
              <Footer />
            </React.Fragment>
          }
        />{" "}
        <Route
          path="/admin-auth/*"
          element={
            <div style={{ display: "flex" }}>
              <AdminLogin />
            </div>
          }
        />
        <Route
          path="/admin-dashboard/*"
          element={
            <div style={{ display: "flex" }}>
              <AdminDashboard />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
