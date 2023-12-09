import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const { login, user } = useAuth();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Navigate to='/' />;
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      document.cookie = `monefijwt=${token}; path=/`;
      login(token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white p-8 rounded shadow-md w-96'>
      <h2 className='text-2xl font-bold mb-4'>Login</h2>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full mb-4 p-2 border rounded'
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full mb-4 p-2 border rounded'
      />
      <button
        onClick={handleLogin}
        className='bg-indigo-500 text-white p-2 rounded'
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;
