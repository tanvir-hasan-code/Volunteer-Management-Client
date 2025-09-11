import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure/useAxiosSecure';

const useCancelRequestAPI = () => {
	const axiosSecure = useAxiosSecure();

	const cancelRequestPromise = (_id) => {
		return axiosSecure.delete(`/deleteRequest/${_id}`);
	}
	return {
		cancelRequestPromise
	}
			

};

export default useCancelRequestAPI;