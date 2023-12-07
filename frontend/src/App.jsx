import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={LoginPage} />
      </Routes>
    </Router>
  );
}
