import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditExpenseForm = () => {
  const { id: expenseId } = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("monefijwt="))
          ?.split("=")[1];
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/expenses/${expenseId}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const { description, amount } = response.data;
          setDescription(description);
          setAmount(amount);
        } else {
          console.error("Failed to fetch expense details");
        }
      } catch (error) {
        console.error("Error during fetch expense details:", error);
      }
    };

    // Fetch expense details when the component mounts
    fetchExpense();
  }, [expenseId]);

  const handleUpdate = async () => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("monefijwt="))
        ?.split("=")[1];
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/expenses/${expenseId}`,
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
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.error("Error during update expense:", error);
    }
  };

  return (
    <div className='max-w-sm mx-auto my-12 p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Edit Expense</h2>
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
          onClick={handleUpdate}
          className='bg-indigo-500 text-white px-4 py-2 rounded-md'
        >
          Update Expense
        </button>
      </form>
    </div>
  );
};

export default EditExpenseForm;
