import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");          // username → email
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    fetch("/api/login", {   // proxy se http://localhost:8080/api/login call hoga
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),   // username → email
    })
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => setMessage("Error: " + err));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
      <input
        type="email"                              // type="text" → type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}   // onChange username → email
      /><br/><br/>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/><br/>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
