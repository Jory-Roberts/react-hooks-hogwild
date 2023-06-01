function Hog({ name, image, weight, speciality, greased }) {
	return (
		<div className='parent-container ui card eight wide column'>
			<div className='hog-img-container'>
				<img
					className='hog-img'
					src={image}
					alt={`${image.name}.jpg`}
				/>
			</div>
			<div className='pigTile'>
				<h3>{name}</h3>
				<p>{speciality}</p>
				<p>{weight}</p>
				<p>{greased}</p>
			</div>
		</div>
	);
}
export default Hog;
