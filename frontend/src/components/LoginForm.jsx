import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      history.push("/dashboard");
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
        className='bg-blue-500 text-white p-2 rounded'
      >
        Login
      </button>
    </div>
  );
}

export default LoginForm;
