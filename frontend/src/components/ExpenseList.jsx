/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ExpenseList = () => {
  const navigate = useNavigate();
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = document.cookie
          .split("; ")
          .find((row) => row.startsWith("monefijwt="))
          ?.split("=")[1];
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/expenses`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          setExpenses(response.data);
        } else {
          console.error("Failed to fetch expenses");
        }
      } catch (error) {
        console.error("Error during fetch expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div className='w-full p-6 bg-white rounded-md shadow-md'>
      <h2 className='text-2xl font-semibold mb-4'>Expense List</h2>
      <ul>
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className='flex items-center justify-between border-b py-2 last:border-b-0'
          >
            <div>
              {expense.description} - {expense.amount}
            </div>
            <div>
              <button
                onClick={() => navigate(`/edit-expense/${expense._id}`)}
                className='bg-indigo-500 text-white px-2 py-1 rounded-md mr-2'
              >
                Edit
              </button>
              <button
                // onClick={() => onDelete(expense.id)}
                className='bg-red-500 text-white px-2 py-1 rounded-md'
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
