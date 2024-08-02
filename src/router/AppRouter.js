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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import useAuthorized from '../useAuth/useAuthorized';
import Spinner from '../components/Spinner';

const AppRouter = () => {
  const { isAuthorized, loading } = useAuthorized();
  return (
    <div className='w-full h-screen bg-slate-50'>
      <BrowserRouter>
        <Header isAuthorized={isAuthorized} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/offers' element={<Offers />} />
          <Route element={<PrivateRoute isAuthorized={isAuthorized} />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route element={<PublicRoute isAuthorized={isAuthorized} />}>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default AppRouter