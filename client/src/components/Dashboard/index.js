import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';
import moment from 'moment';
import Card1 from '../../assets/images/Final Taroble Cards-01.png';


const Dashboard = () => {

    const { data: userData } = useQuery(QUERY_ME_BASIC);
    // console.log(userData.me.username)
    const loggedIn = Auth.loggedIn();

    const date = moment().format('M/D/YY');

    return (
        <section>
            <div className="section-center">
                <div className="dashboard-center">
                    <h2 className="user">Welcome, Name!</h2>
                    <div className="card-container">
                        {loggedIn && userData ? (
                            <div className="card-container-center">
                                <p className="reading-date">{date}</p>
                                <div className="cards">
                                    <img src={Card1} alt="card1" />
                                    <img src={Card1} alt="card1" />
                                    <img src={Card1} alt="card1" />
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Dashboard
