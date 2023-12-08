import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddExpenseForm from "./components/AddExpenseForm";
import EditExpenseForm from "./components/EditExpenseForm";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/add-expense'
            element={
              <PrivateRoute>
                <AddExpenseForm />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/edit-expense/:id'
            element={
              <PrivateRoute>
                <EditExpenseForm />
              </PrivateRoute>
            }
          />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
