import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ onLogin }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => {
        onLogin(user);
        history.push("/home");
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
      />
    
    </form>
  );
}

export default Login;
