import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterForm() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Navigate to='/' />;
  }

  const handleRegister = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, {
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-white p-8 rounded shadow-md w-96'>
      <h2 className='text-2xl font-bold mb-4'>Register</h2>
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
        onClick={handleRegister}
        className='bg-indigo-500 text-white p-2 rounded'
      >
        Register
      </button>
    </div>
  );
}

export default RegisterForm;
