import React, { useState } from 'react';
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
			image: currentReading.reading.past.image,
			name: currentReading.reading.past.name,
			text: currentReading.reading.past.pastText,
		},
		{
			heading: "present",
			image: currentReading.reading.present.image,
			name: currentReading.reading.present.name,
			text: currentReading.reading.present.presentText
		},
		{
			heading: "future",
			image: currentReading.reading.future.image,
			name: currentReading.reading.future.name,
			text: currentReading.reading.future.futureText,
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

						<div className="card-face card-face-front">
							<img src={require(`../../assets/images/cards/${image}`).default} className='card-img' alt={name} />
						</div>

						<div className="card-face card-face-back">
							<div className="card-content">
								<div className="card-body">
									<div className='desc'>
										<h3 className="card-desc-head">Description</h3>
										<div className='desc-text'>{text}</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div className="card-slider-btn-container">
					<button className="btn prev" onClick={prev}>
						<svg className='arrow' width="20" height="33" viewBox="0 0 20 33" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M3 30L16.2535 17.2198C16.6613 16.8266 16.6613 16.1734 16.2535 15.7802L3 3" stroke="#D0A863" strokeOpacity="0.63" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
					<button className="btn next" onClick={next}>
						<svg className='arrow' width="20" height="33" viewBox="0 0 20 33" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M3 30L16.2535 17.2198C16.6613 16.8266 16.6613 16.1734 16.2535 15.7802L3 3" stroke="#D0A863" strokeOpacity="0.63" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</div>
			</div>
			<div className="outside-btns">
				<button onClick={clickhandler}>{isFlipped ? 'view card' : 'view description'}</button>
				{Auth.loggedIn() && previousPage !== 'dashboard' ? (
					<button>
						<Link to="/dashboard" className="btn-text" onClick={saveReading}>save reading </Link>
					</button>
				) : null}
				{Auth.loggedIn() && previousPage === 'dashboard' ? (
					<button>
						<Link className="btn-text" to="/dashboard"> dashboard </Link>
					</button>
				) : null}
			</div>

		</section>
	)
};

export default Detail;