import { useState } from "react";
import ExpenseList from "../components/ExpenseList";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className='mx-auto max-w-7xl py-12'>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
