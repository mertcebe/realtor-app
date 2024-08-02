import React from 'react'
import { Navigate, Outlet } from 'react-router'
import useAuthorized from '../useAuth/useAuthorized';
import Spinner from '../components/Spinner';

const PrivateRoute = ({ isAuthorized }) => {
    const { loading } = useAuthorized();
  if(loading){
    console.log('girdi');
    return (
      <Spinner />
    )
  }
    return (
        <>
            {
                isAuthorized ?
                    <Outlet />
                    :
                    <Navigate to={'/sign-in'} />
            }
        </>
    )
}

export default PrivateRoute