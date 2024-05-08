import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainLayout from './shared/MainLayout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Order from './pages/Order';
import Reports from './pages/Reports';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
        <Route path="/dashboard" element={<MainLayout><Dashboard/></MainLayout>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/orders" element={<MainLayout><Order/></MainLayout>}/>
        <Route path="/reports" element={<MainLayout><Reports/></MainLayout>}/>
      </Routes>
    </Router> 
    </>
  );
}

export default App;
