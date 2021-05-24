import React, { useState } from 'react';
import arrow from '../../assets/images/arrow-right.svg'
// import alien from '../../assets/images/cards/boujie-alien.png';
// import good from '../../assets/images/cards/im-good.png'
// import woke from '../../assets/images/cards/woke-up-like-this.png';

import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from '@apollo/react-hooks';
import { ADD_READING } from '../../utils/mutations';


const Detail = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract currentReading from the state object
	const { currentReading } = state;
	// console log the currentReading data


	const [addReading, { error }] = useMutation(ADD_READING);

	// save the current reading
	const saveReading = async event => {
		try {
			// add reading to users readings array
			await addReading({
				variables: { readingData: currentReading }
			});
		} catch (e) {
			console.error(e);
		}
	};

	const cards = [
		{
			heading: "past",
			image: currentReading.past.image,
			name: currentReading.past.name,
			pastText: currentReading.past.pastText,
		},
		{
			heading: "present",
			image: currentReading.present.image,
			name: currentReading.present.name,
			presentText: currentReading.present.presentText
		},
		{
			heading: "future",
			futureText: currentReading.future.futureText,
			image: currentReading.future.image,
			name: currentReading.future.name,

		}


	];
	console.log('========cards array==========')
	console.log(cards)

	// create a state to access image index
	const [card, setCardIndex] = useState(0);
	const { heading, futureText, image, name, pastText, presentText } = cards[card];

	// function to check the index of the images
	const checkIndexNumber = number => {
		if (number > cards.length - 1) return 0;
		if (number < 0) return cards.length - 1;

		return number;
	}

	// increase index by 1
	const next = () => setCardIndex(index => checkIndexNumber(index + 1));
	// subtract index by 1
	const prev = () => setCardIndex(index => checkIndexNumber(index - 1));


	return (
		<section>

			<p className='detail-header'>{heading}</p>
			<div className="slider-container">
				<div className="image-slider">
					<img src={require(`../../assets/images/cards/${image}`).default} className='card-img' alt={name} />

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
			<div>{futureText}</div>
			<div>{pastText}</div>
			<div>{presentText}</div>
			<button>VIEW DESCRIPTION</button>
			<button onClick={saveReading}>SAVE READING</button>

		</section>
	)
};

export default Detail;