import React from 'react';

function Tile({ name, image }) {
	return (
		<div className='Tile'>
			<h3>{name}</h3>
			<img
				src={image}
				alt={name}
			/>
		</div>
	);
}

export default Tile;
