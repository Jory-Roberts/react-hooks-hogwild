import { useState } from 'react';
import Tile from './Tile';
import Hog from './Hog';

function HogList({ hogs }) {
	const [isGreased, setIsGreased] = useState(false);

	function handleIsGreased(e) {
		setIsGreased(e.target.checked);
	}

	const filteredGreased = hogs.filter((hog) => {
		const filtered = isGreased ? hog.greased : hogs;
		return filtered;
	});

	return (
		<div>
			<Tile
				isGreased={isGreased}
				handleIsGreased={handleIsGreased}
			/>
			<div className='hog-list'></div>
			{filteredGreased.map((hog) => (
				<Hog
					key={hog.name}
					hog={hog}
					name={hog.name}
					speciality={hog.speciality}
					image={hog.image}
					greased={hog.greased}
					weight={hog.weight}
				/>
			))}
		</div>
	);
}

export default HogList;
