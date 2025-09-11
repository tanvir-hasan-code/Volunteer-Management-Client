import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure';

const useMyVolunteerRequestAPI = () => {

	const axiosSecure = useAxiosSecure();
	const myRequestVolunteer = (email) => {
		return axiosSecure.get(`/myRequestedPosts?email=${email}`).then(res => res.data);
	}

	return {
		myRequestVolunteer
	};
};

export default useMyVolunteerRequestAPI;