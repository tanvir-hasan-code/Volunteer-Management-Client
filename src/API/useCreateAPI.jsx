import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure';

const useCreateAPI = () => {
	const axiosSecure = useAxiosSecure();
	const createdPost = (email) => {
		return axiosSecure.get(`/manageMyPost/myCreatedPosts?email=${email}`).then(res => res.data);
	}

	return {
		createdPost
	};
};

export default useCreateAPI;