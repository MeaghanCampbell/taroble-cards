import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Loader from '../Loader/';

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { data: userData } = useQuery(QUERY_ME);
	const username = Auth.getProfile().data.username;
	const loggedIn = Auth.loggedIn();

	useEffect(() => {
		if (username) {
			setIsLoading(false);
		}
	}, [username]);

	if (isLoading) {
		return <Loader />
	}

	return (
		<section>
			<div className='dashboard-container'>
				<p className="user">welcome, {username}!</p>
				<div className="card-container">
					{loggedIn && userData ? (
						<div className="card-container-center">
							<p className="reading-date">{userData.me.readings[0].date}</p>
							<div className="cards">
								<img className='dash-card-1' src={require(`../../assets/images/cards/${userData.me.readings[0].readingData.past.image}`).default} alt="card1" />
								<img className='dash-card-2' src={require(`../../assets/images/cards/${userData.me.readings[0].readingData.present.image}`).default} alt="card1" />
								<img className='dash-card-3' src={require(`../../assets/images/cards/${userData.me.readings[0].readingData.future.image}`).default} alt="card1" />
							</div>
						</div>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default Dashboard;
