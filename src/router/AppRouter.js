import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import Offers from '../pages/Offers';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/offers' element={<Offers />} />
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default AppRouter