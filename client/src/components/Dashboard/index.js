import React, { useEffect, useState } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import Loader from '../Loader/';
import { useStoreContext } from "../../utils/GlobalState"
import { CURRENT_PAGE } from '../../utils/actions'

import Reading from '../Reading';

const Dashboard = () => {
	// import the global state and dispatch
	const [, dispatch] = useStoreContext();

	const [isLoading, setIsLoading] = useState(true);
	const { data: userData } = useQuery(QUERY_ME, {
		fetchPolicy: "no-cache"
	}); 
	const username = Auth.getProfile().data.username;
	const loggedIn = Auth.loggedIn();

	useEffect(() => {
		dispatch({
			type: CURRENT_PAGE,
			currentPage: 'dashboard'
		})
		
		if (username || userData) {
			setIsLoading(false);
		}
	}, [username, userData, dispatch]);

	if (isLoading) {
		return <Loader />
	}

	return (
		<section>
			<div className='dashboard-container'>
				<p className="user">welcome, {username}!</p>
				
				{loggedIn && userData ? (
					<Reading userData={userData}/>
				) : <div></div>}

			</div>
		</section>
	)
}

export default Dashboard;
