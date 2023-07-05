import './App.css';
import { useState } from 'react';

import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';

import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import Navbar from '../../components/Navbar/Navbar';

export default function App() {
  
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <Navbar user={user.name} setUser={setUser}/>
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}
