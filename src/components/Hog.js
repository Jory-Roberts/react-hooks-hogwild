function Hog({ name, image, weight, speciality, greased }) {
	return (
		<div className='hog-tile'>
			<div className='hog-img-container'>
				<img
					className='hog-img'
					src={image}
					alt={`${image.name}.jpg`}
				/>
			</div>
			<div className='hog-details'>
				<h3>{name}</h3>
				<p>{speciality}</p>
				<p>Weight: {weight}</p>
				<p>Greased: {greased ? 'Yes' : 'No'}</p>
			</div>
		</div>
	);
}

export default Hog;
