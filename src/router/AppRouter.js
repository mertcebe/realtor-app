import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ForgotPassword from '../components/ForgotPassword';
import Offers from '../components/Offers';

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
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