import { useState, useEffect } from 'react';

const useCounter = (initialValue) => {
	const [counter, setCounter] = useState(initialValue);

	useEffect(() => {
		console.log(counter);
	}, [counter])

	const increment = () => {
		setCounter(counter + 1);
	}

	return {
		counter,
		increment
	}

}

export default useCounter;
