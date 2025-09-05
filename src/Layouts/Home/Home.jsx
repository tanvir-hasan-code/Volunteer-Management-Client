import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Banner from '../Header/Banner/Banner';
import VolunteerCategories from '../../Components/VolunteerCategories/VolunteerCategories';



const Home = () => {
	useTitle('Home')
	return (
		<div>
			<Banner />
			<VolunteerCategories/>
		</div>
	);
};

export default Home;