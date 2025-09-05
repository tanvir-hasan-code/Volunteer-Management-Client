import React from 'react';
import { useTitle } from '../../Hooks/useTitle';
import Banner from '../Header/Banner/Banner';



const Home = () => {
	useTitle('Home')
	return (
		<div>
			<Banner/>
		</div>
	);
};

export default Home;