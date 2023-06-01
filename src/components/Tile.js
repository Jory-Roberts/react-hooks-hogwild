function Tile({ handleIsGreased, isGreased }) {
	return (
		<div className='tile-container'>
			<p>Sort by</p>
			<select>
				<option value='name'>Name</option>
				<option value='weight'>Weight</option>
			</select>
			<input
				onChange={handleIsGreased}
				type='checkbox'
				checked={isGreased}
			/>
			<label>Greased Pigs</label>
		</div>
	);
}
export default Tile;
