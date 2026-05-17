import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL_BACKED}/api/login`,
        {
          email,
          password
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      // save token
      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful!");

      // redirect
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", marginTop: "50px" }}>
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={handleLogin}
        style={{ width: "100%", padding: "10px", background: "green", color: "white" }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;