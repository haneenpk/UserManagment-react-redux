import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/users/home/Home';
import Profile from './components/users/Profile/Profile';
import Dashboard from './components/admin/Dashboard/Dashboard';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
