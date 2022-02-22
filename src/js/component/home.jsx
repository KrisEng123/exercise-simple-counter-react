import React from "react";
import Counter from "./counter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Counter />
			<br></br>
			<br></br>
			<div>
				<p>
					Made by{" "}
					<a href="https://nl.linkedin.com/in/crystleying">
						Crystle Ying
					</a>
					, with love!
				</p>
			</div>
		</>
	);
};

export default Home;
