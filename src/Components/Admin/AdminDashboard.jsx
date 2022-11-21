import React from "react";
import { Routes, Route } from "react-router-dom";
import AddReview from "./AddReview";
import SideNav from "./SideNav";
import ViewUsers from "./ViewUsers";
function AdminDashboard() {
  return (
    <section>
      <SideNav />
      <Routes>
        <Route
          path={"/add-review"}
          element={
            <React.Fragment>
              <div style={{ position: "absolute", left: "20%", width: "70%", display: "flex", justifyContent: "center" }}>
                <AddReview />
              </div>
            </React.Fragment>
          }
        />{" "}
        <Route
          path={"/"}
          element={
            <React.Fragment>
              <div style={{ position: "absolute", left: "20%", width: "70%", display: "flex", justifyContent: "center" }}>
                <ViewUsers />
              </div>
            </React.Fragment>
          }
        />
      </Routes>
    </section>
  );
}

export default AdminDashboard;
