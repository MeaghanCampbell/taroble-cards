import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Loader from '../Loader/';
import { useStoreContext } from "../../utils/GlobalState"
import { CURRENT_PAGE, CURRENT_READING, PREVIOUS_PAGE } from '../../utils/actions'
import { Link } from 'react-router-dom';

const Dashboard = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();

	const [isLoading, setIsLoading] = useState(true);
	const { data: userData } = useQuery(QUERY_ME); 
	const username = Auth.getProfile().data.username;
	const loggedIn = Auth.loggedIn();

	console.log('out')

	useEffect(() => {

		console.log('in')
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'dashboard'
		})

		if (username) {
			setIsLoading(false);
		}
	}, [username]);

	if (isLoading) {
		return <Loader />
	}

	const loadDetail = reading => {
		dispatch({
			type: CURRENT_READING,
			currentReading: reading
		})
		
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'detail'
		})

		dispatch({
			type: PREVIOUS_PAGE,
			previousPage: 'dashboard'
		})
	}

	return (
		<section>
			<div className='dashboard-container'>
				<p className="user">welcome, {username}!</p>
				
				{loggedIn && userData ? (
						 userData.me.readings.map((reading) => (
							<Link key={reading._id} to="/">
								<div onClick={() =>{loadDetail(reading.readingData)}} className="card-container">	
									<div className="card-container-center">
										<p className="reading-date">{reading.date}</p>
										<div className="cards">
											<img className='dash-card-1' src={require(`../../assets/images/cards/${reading.readingData.past.image}`).default} alt={reading.readingData.past.name} />
											<img className='dash-card-2' src={require(`../../assets/images/cards/${reading.readingData.present.image}`).default} alt={reading.readingData.present.name} />
											<img className='dash-card-3' src={require(`../../assets/images/cards/${reading.readingData.future.image}`).default} alt={reading.readingData.future.name} />
										</div>
									</div>
								</div>
							</Link>
				))) : <div></div>}

			</div>
		</section>
	)
}

export default Dashboard;
