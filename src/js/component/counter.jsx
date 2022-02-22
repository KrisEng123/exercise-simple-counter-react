import React from "react";
import { useState, useEffect } from "react";

const Counter = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
	}, []);

	return <h1>The component has been rendered for {seconds} seconds</h1>;
};

export default Counter;
