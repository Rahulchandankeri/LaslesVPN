import React from "react";
import { useEffect, useState } from "react";
import "../../Assets/Styles/sass/layouts/userList.scss";
import "../../Assets/Styles/sass/layouts/cards.scss";
function ViewUsers() {
  const [users, updateUsers] = useState([]);
  const [loading, updateLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      const url = await fetch("http://localhost:3001/users");
      const res = await url.json();
      updateUsers(res);
      updateLoading(false);
    };
    fetchUsers();
  }, [users]);
  return (
    <section className="card-main-wrapper">
      {loading && <div className="loader">Loading...</div>}
      {<h4> Total users: {users.length}</h4>}
      <div className="userCard">
        {users.map((user) => {
          return (
            <div className="my-card" key={user.id} style={{ maxWidth: "15rem", marginRight: "3rem" }}>
              <p>Full name: {user.fullName}</p>
              <p>Email: {user.email}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ViewUsers;
