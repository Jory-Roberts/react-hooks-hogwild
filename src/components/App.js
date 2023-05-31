import React from 'react';
import Nav from './Nav';
import Tile from './Tile';

import hogs from '../porkers_data';

console.log(hogs);

function App() {
	return (
		<div className='App'>
			<Nav />
			{hogs.map((hog, i) => (
				<Tile
					key={i}
					name={hog.name}
					image={hog.image}
				/>
			))}
		</div>
	);
}

export default App;
