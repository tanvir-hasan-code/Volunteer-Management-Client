import React, { Suspense } from 'react';
import useAuth from '../../../../Hooks/Auth/useAuth';
import useMyVolunteerRequestAPI from '../../../../API/useRequestAPI';
import MyRequestVolunteerTable from './MyRequestVolunteerTable';

const MyRequestedPosts = () => {
	const {user} = useAuth()
	const { myRequestVolunteer } = useMyVolunteerRequestAPI();
	return (
		<div className='md:w-11/12 mx-auto my-3'>
			<Suspense fallback={"Loading....."}>
				<MyRequestVolunteerTable myRequestVolunteer={myRequestVolunteer(user.email)}/>

			</Suspense>
		</div>
	);
};

export default MyRequestedPosts;