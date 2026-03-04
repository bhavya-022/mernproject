import React, { useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {

  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (error) {
      console.log("Errors:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>
        FOR Contact details:
      </h1>

      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        Users
      </h1>

      {users.map((user) => (
        <div key={user.id}>
          <h4>Name: {user.name}</h4>
          <h4>Email: {user.email}</h4>
          <h4>Phone: {user.phone}</h4>
          <h4>Website: {user.website}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Contact;