import React from 'react';
import Reading from '../../lib/Reading'
import { CURRENT_READING, CURRENT_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";


const Home = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract currentReading from the state object
	const { currentReading, currentPage } = state;

	// generate a new reading and save it to the currentReading in global state
	const getReading = () => {
		const reading = new Reading;
		
		dispatch({
			type: CURRENT_READING,
			// generate a new reading and save it to the currentReading in global state
			currentReading: reading.generateReading()
		})

		dispatch({
			type: CURRENT_PAGE,
			// generate a new reading and save it to the currentReading in global state
			currentPage: 'messages'
		})
	}

	return (
		<section>
			<div className=" home-section section-center">
				<h1 className='title-home'>Taroble Cards</h1>
				<div className='get-reading-btn'>
					<button type="submit" onClick={getReading}>
						GET A READING
					</button>
				</div>
			</div>
		</section>
	)
}

export default Home;
