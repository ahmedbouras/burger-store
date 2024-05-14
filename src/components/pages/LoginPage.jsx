import { useState } from "react";

export default function LoginPage() { 
    const [username, setUsername] = useState("")

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${username}`);
    setUsername("");
  }

  return (
    <div>
      <h1>Welcome to our store!</h1>

      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>

        <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        required />
        <button type="submit">Access to your account</button>
      </form>
    </div>
  )
}