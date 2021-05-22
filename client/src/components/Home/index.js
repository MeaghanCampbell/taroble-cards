import React from 'react';
import { Link } from 'react-router-dom';
import Reading from '../../lib/Reading'
import { CURRENT_READING } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";

const Home = () => {
	const [state, dispatch] = useStoreContext();
	const { currentReading } = state;

	const getReading = () => {
		const reading = new Reading;
		
		dispatch({
			type: CURRENT_READING,
			currentReading: reading.generateReading()
		})
	}

	return (
		<section>
			<div className=" home-section section-center">
				<h1 className='title-home'>Taroble Cards</h1>
				<div className='get-reading-btn'>
					<button type="submit" onClick={getReading}>
						<Link to="/card-detail" className="get-reading-link">GET A READING</Link>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Home;
