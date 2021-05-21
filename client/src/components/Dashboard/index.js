import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';
import moment from 'moment';
import Card1 from '../../assets/images/cards/boujie-alien.png';
import Loading from '../LoadingScreen/';

const Dashboard = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { data: userData } = useQuery(QUERY_ME_BASIC);
	const username = Auth.getProfile().data.username;
	const loggedIn = Auth.loggedIn();
	const date = moment().format('M/D/YY');

	useEffect(() => {
		if (username) {
			setIsLoading(false);
		}
	}, [username]);

	if (isLoading) {
		return <Loading />
	}
	return (
		<section>
			<div className='dashboard-container'>
				<p className="user">welcome, {username}!</p>
				<div className="card-container">
					{loggedIn && userData ? (
						<div className="card-container-center">
							<p className="reading-date">{date}</p>
							<div className="cards">
								<img className='dash-card-1' src={Card1} alt="card1" />
								<img className='dash-card-2' src={Card1} alt="card1" />
								<img className='dash-card-3' src={Card1} alt="card1" />
							</div>
						</div>
					) : null}
				</div>
			</div>
		</section>
	)
}

export default Dashboard;
