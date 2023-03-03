import { useCallback, useState } from 'react';

const useHttp = () => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestUrl, applyData) => {
		setLoading(true);
		setError(null);
		try {
			let response = await fetch(requestUrl);
			// console.log(response);

			if (!response.ok) {
				applyData(response); // get data for displaying MovieDetail component
				throw new Error('Request failed');
			}

			let data = await response.json();
			// console.log(data);

			applyData(data.results);
		} catch (err) {
			// alert('Failed.');
			setError(err);
		}
		setLoading(false);
	}, []);

	return {
		isLoading,
		error,
		sendRequest,
	};
};

export default useHttp;
