import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className='container'>
				<h1 className='title-home'>Taroble Cards</h1>
			</div>
			<div className='container'>
				<button type="submit">
					<Link to="/card-detail" className='btn-text'>GET A READING</Link>
				</button>
			</div>
		</div>
	)
}

export default Home;
