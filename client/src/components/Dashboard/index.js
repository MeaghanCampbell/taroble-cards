import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';
import Loading from '../LoadingScreen';


const Dashboard = () => {
    // querying for cards goes here
    // const  {loading, data} = useQuery();
    const [loading, setLoading] = useState(true);
    const { data: userData } = useQuery(QUERY_ME_BASIC);

    const loggedIn = Auth.loggedIn();

    if (loading) {
        return <Loading />
    }
    return (
        <main>
            <h2>Welcome, {userData.me.username}!</h2>
            <div>s
              {loggedIn && userData ? (
                    <div>
                        <span>5/19/2021</span>
                        <div>
                            {/* cards will goes here */}
                            <article style={{ width: "200px", height: "300px", background: "white" }}>
                                taroble cards
                          </article>
                        </div>
                    </div>
                ) : null}
            </div>
        </main>
    )
}

export default Dashboard
