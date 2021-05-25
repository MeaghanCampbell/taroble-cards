import React, { useState } from 'react';
import arrow from '../../assets/images/arrow-right.svg'
import { useStoreContext } from "../../utils/GlobalState";
import { useMutation } from '@apollo/react-hooks';
import { ADD_READING } from '../../utils/mutations';
import { CURRENT_PAGE } from '../../utils/actions'
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

const Detail = () => {
	// import the global state and dispatch
	const [state, dispatch] = useStoreContext();
	// extract currentReading from the state object
	const { currentReading, previousPage } = state;
	// console log the currentReading data
	console.log(currentReading)
	// 
	const [addReading] = useMutation(ADD_READING);

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
		dispatch({
			type: CURRENT_PAGE,
			// send them to the dashboard after saving the reading
			currentPage: 'dashboard'
		})

		// window.location.assign('/dashboard')

	};

	const cards = [
		{
			heading: "past",
			image: currentReading.past.image,
			name: currentReading.past.name,
			text: currentReading.past.pastText,
		},
		{
			heading: "present",
			image: currentReading.present.image,
			name: currentReading.present.name,
			text: currentReading.present.presentText
		},
		{
			heading: "future",
			image: currentReading.future.image,
			name: currentReading.future.name,
			text: currentReading.future.futureText,
		}
	];

	// create a state to access image index
	const [card, setCardIndex] = useState(0);
	const { heading, image, name, text } = cards[card];

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

	const [isFlipped, setIsFlipped] = useState(false);
	const clickhandler = () => setIsFlipped(!isFlipped);
	return (
		<section className="detail-section">

			<h3 className="detail-header">{heading}</h3>
			<div className="card-slider-container">
				<div className="card">
					<div className={isFlipped ? "card-inner is-flipped" : "card-inner"}>

						{/* Front of card */}
						<div className="card-face card-face-front">
							<img src={require(`../../assets/images/cards/${image}`).default} className='card-img' alt={name} />
						</div>

						{/* Back of card */}
						<div className="card-face card-face-back">
							<div className="card-content">
								<div className="card-body">
									<div className='desc'>
										<h3 className="card-desc-head">Description</h3>
										<div className="card-text">{text}</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="card-slider-btn-container">
					<button className="btn prev" onClick={prev}>
						<object className='arrow' type="image/svg+xml" data={arrow}>arrow</object>
					</button>
					<button className="btn next" onClick={next}>
						<object className='arrow' type="image/svg+xml" data={arrow}>arrow</object>
					</button>
				</div>
			</div>
			<div className="outside-btns">
				<button onClick={clickhandler}>{isFlipped ? 'view card' : 'view description'}</button>
				{Auth.loggedIn() ? (
					<button onClick={saveReading}>save reading</button>
				) : null}
			</div>

		</section>
	)
};

export default Detail;