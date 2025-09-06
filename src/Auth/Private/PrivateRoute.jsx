import React from 'react';
import useAuth from '../../Hooks/Auth/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

	const {user, loading} = useAuth();
	const location = useLocation();

	if (loading) {
    return (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span className="loader"></span>
      </div>
    );
	}
	
	if (!user) {
		return <Navigate to={'/login'} state={location.pathname}/>;
	}


	return children;
};

export default PrivateRoute;



