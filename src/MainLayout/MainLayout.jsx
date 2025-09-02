import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Layouts/Footer/Footer';
import Navbar from '../Layouts/Header/Navbar/Navbar';

const MainLayout = () => {
	return (
		<div>
			<Navbar/>
			<Outlet />
			<Footer/>
		</div>
	);
};

export default MainLayout;