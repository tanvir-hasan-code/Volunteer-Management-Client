import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Banner from '../Header/Banner/Banner';
import VolunteerCategories from '../../Components/VolunteerCategories/VolunteerCategories';
import CallToAction from '../../Components/CallToAction/CallToAction';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Statistics from '../../Components/Statistics/Statistics';
import Events from '../../Components/Events/Events';
import Newsletter from '../../Components/Newsletter/Newsletter';
import Partners from '../../Components/Blog/Blog';
import FAQ from '../../Components/FAQ/FAQ';



const Home = () => {
	useTitle('Home')
	return (
		<div>
			<Banner />
			<VolunteerCategories />
			<CallToAction />
			<Testimonials />
			<Statistics />
			<Events />
			<Newsletter />
			<Partners />
			<FAQ/>
		</div>
	);
};

export default Home;