import { Link } from "react-router-dom";
import ExpenseList from "../components/ExpenseList";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div className='w-full'>
      <div className='mx-auto max-w-7xl py-2 flex justify-end'>
        <Link
          to={"/add-expense"}
          className='bg-indigo-500 text-white px-2 py-1 rounded-md mr-2'
        >
          Add Expense
        </Link>
        <button
          onClick={logout}
          className='bg-red-500 text-white px-2 py-1 rounded-md'
        >
          Logout
        </button>
      </div>
      <div className='mx-auto max-w-7xl py-12'>
        <ExpenseList />
      </div>
    </div>
  );
};

export default Dashboard;
