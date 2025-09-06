import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure';

const useAllVolunteerPostAPI = () => {

	const axiosSecure = useAxiosSecure();
	const myRequestVolunteer = (email) => {
		return axiosSecure.get(`/requestVolunteer?email=${email}`).then(res => res.data);
	}

	return {
		myRequestVolunteer
	};
};

export default useAllVolunteerPostAPI;