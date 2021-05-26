import React from 'react';
// import Reading from '../../lib/Reading'
import { useQuery } from '@apollo/react-hooks';
import { QUERY_READING } from '../../utils/queries';
import { CURRENT_READING, CURRENT_PAGE } from '../../utils/actions';
import { useStoreContext } from "../../utils/GlobalState";


const Home = () => {
	// import the global state and dispatch
	const [, dispatch] = useStoreContext();
	const { data: reading } = useQuery(QUERY_READING, {
		pollInterval: 500,
	  });

	// generate a new reading and save it to the currentReading in global state
	const getReading = () => {
		
		dispatch({
			type: CURRENT_READING,
			// generate a new reading and save it to the currentReading in global state
			currentReading: reading
		})

		dispatch({
			type: CURRENT_PAGE,
			// send user to messages component
			currentPage: 'messages'
		})
	}

	return (
		<div className="home-section">
				<div className='border'></div>
				<div className='home-container'>
				<h1 className='title-home'>Taroble Cards</h1>
				<div className='get-reading-btn'>
					<button type="submit" onClick={getReading}>
						GET A READING
					</button>
				</div>
				</div>
				<footer className='border'></footer>
			</div>
	)
}

export default Home;
