import { useState } from "react";
import axios from "axios";

const AddExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("monefijwt="))
        ?.split("=")[1];
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/expenses`,
        {
          description,
          amount,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setDescription("");
        setAmount("");
      } else {
        console.error("Failed to add expense");
      }
    } catch (error) {
      console.error("Error during add expense:", error);
    }
  };

  return (
    <div className='max-w-sm mx-auto my-12 p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Add Expense</h2>
      <form className='space-y-4'>
        <div>
          <label className='block text-sm font-medium text-gray-600'>
            Description:
          </label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-600'>
            Amount:
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className='mt-1 p-2 w-full border rounded-md'
          />
        </div>
        <button
          type='button'
          onClick={handleAdd}
          className='bg-indigo-500 text-white px-4 py-2 rounded-md'
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
