import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function RegisterForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        email,
        password,
      });
      history.push("/login");
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
        className='bg-green-500 text-white p-2 rounded'
      >
        Register
      </button>
    </div>
  );
}

export default RegisterForm;
