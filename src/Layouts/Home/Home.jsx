import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Banner from '../Header/Banner/Banner';
import VolunteerCategories from '../../Components/VolunteerCategories/VolunteerCategories';
import CallToAction from '../../Components/CallToAction/CallToAction';
import Testimonials from '../../Components/Testimonials/Testimonials';
import Statistics from '../../Components/Statistics/Statistics';
import Events from '../../Components/Events/Events';
import Newsletter from '../../Components/Newsletter/Newsletter';
import FAQ from '../../Components/FAQ/FAQ';
import Action from '../../Components/Action/Action';
import Blog from '../../Components/Blog/Blog';
import VolunteerNeedsNow from '../../Components/VolunteerNeedsNow/VolunteerNeedsNow';



const Home = () => {
	useTitle('Home')
	return (
		<div>
			<Banner />
			<VolunteerNeedsNow/>
			<VolunteerCategories />
			<CallToAction />
			<Statistics />
			<Testimonials />
			<Events />
			<Blog/>
			<Newsletter />
			<FAQ />
			<Action/>
		</div>
	);
};

export default Home;