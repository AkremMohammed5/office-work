// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    // <AuthProvider>
    //   <BrowserRouter>
    //     <Routes>
    //         <Route path="/login" element={<Login />} />
    //         <Route element={<PrivateRoute />}>
    //           <Route path="/dashboard" element={<Dashboard />} />
    //           {/* ...other protected routes */}
    //         </Route>
    //       </Routes>
    //   </BrowserRouter>
    // </AuthProvider>
    <Admin/>
  );
}
