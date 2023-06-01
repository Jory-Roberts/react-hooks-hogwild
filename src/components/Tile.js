function Tile({ handleIsGreased, isGreased }) {
	return (
		<div className='tile-container'>
			<p>Sort by</p>
			<select>
				<option value='name'>Name</option>
				<option value='weight'>Weight</option>
			</select>
		</div>
	);
}
export default Tile;
