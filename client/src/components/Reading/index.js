import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState"
import { CURRENT_PAGE, CURRENT_READING, PREVIOUS_PAGE } from '../../utils/actions'

const Reading = ({ userData }) => {
    // import the global state and dispatch
	const [, dispatch] = useStoreContext();
    
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

    if (!userData) {
        return <div></div>;
    }

    return (
        <div>
        {userData.me.readings.map((reading) => (
            <Link key={reading._id} to="/">
                <div onClick={() =>{loadDetail(reading.readingData)}} className="card-container">	
                    <div className="card-container-center">
                        <p className="reading-date">{reading.date}</p>
                        <div className="cards">
                            <img className='dash-card-1' src={require(`../../assets/images/cards/${reading.readingData.reading.past.image}`).default} alt={reading.readingData.reading.past.name} />
                            <img className='dash-card-2' src={require(`../../assets/images/cards/${reading.readingData.reading.present.image}`).default} alt={reading.readingData.reading.present.name} />
                            <img className='dash-card-3' src={require(`../../assets/images/cards/${reading.readingData.reading.future.image}`).default} alt={reading.readingData.reading.future.name} />
                        </div>
                    </div>
                </div>
            </Link>))}
        </div>
    );
};

export default Reading;