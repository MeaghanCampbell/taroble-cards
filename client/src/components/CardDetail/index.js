import React, { useState } from 'react';
import arrow from '../../assets/images/arrow-right.svg'
import alien from '../../assets/images/cards/boujie-alien.png';
import good from '../../assets/images/cards/im-good.png'
import woke from '../../assets/images/cards/woke-up-like-this.png';

import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from '@apollo/react-hooks';
import { ADD_READING } from '../../utils/mutations';
import { CURRENT_PAGE } from '../../utils/actions'

const cards = [
	{
		img: alien,
		id: new Date().getTime().toString(),
	},
	{
		img: good,
		id: new Date().getTime().toString(),
	},
	{
		img: woke,
		id: new Date().getTime().toString(),
	}
]
const Detail = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract currentReading from the state object
	const { currentReading } = state;
	// console log the currentReading data
	console.log(currentReading)
	// 
	const [addReading] = useMutation(ADD_READING);

	// save the current reading
	const saveReading = async event => {
		try {
            // add reading to users readings array
            await addReading({
                variables: { readingData:currentReading }
            });
        } catch (e) {
            console.error(e);
        }
		dispatch({
			type: CURRENT_PAGE,
			// send them to the dashboard after saving the reading
			currentPage: 'dashboard'
		})
    };


	// create a state to access image index
	const [imageIndex, setImageIndex] = useState(0);
	const { img, text } = cards[imageIndex];

	// function to check the index of the images
	const checkIndexNumber = number => {
		if (number > cards.length - 1) return 0;
		if (number < 0) return cards.length - 1;

		return number;
	}

	// increase index by 1
	const next = () => setImageIndex(index => checkIndexNumber(index + 1));
	// subtract index by 1
	const prev = () => setImageIndex(index => checkIndexNumber(index - 1));

	return (
		<section>
			<p className='detail-header'>PAST</p>
			<div className="slider-container">
				<div className="image-slider">
					<img src={require(`../../assets/images/cards/${currentReading.future.image}`).default} className='card-img' alt={currentReading.future.name} />
				</div>
				<div className="slider-btn-container">
					<button className="prev slider-btn" onClick={prev}>
					<object className='arrow' type="image/svg+xml" data={arrow}>arrow</object>
					</button>
					<button className="next slider-btn" onClick={next}>
					<object className='arrow' type="image/svg+xml" data={arrow}>arrow</object>
					</button>
				</div>
			</div>
			<div>{text}</div>
			<button>VIEW DESCRIPTION</button>
			<button onClick={saveReading}>SAVE READING</button>
		</section>
	)
};

export default Detail;
