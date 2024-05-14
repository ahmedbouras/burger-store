import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${username}`);
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome to our store!</h1>
      <br />
      <h2>Log in</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={handleChange}
        required
      />
      <button type="submit">Access to your account</button>
    </form>
  );
}
