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

			<h3 className="detail__header">{heading}</h3>
			<div className="card__slider--container">
				<div className="card">
					<div className={isFlipped ? "card__inner is-flipped" : "card__inner"}>
						<div className="card__face card__face--front">
							<img src={require(`../../assets/images/cards/${image}`).default} className='card-img' alt={name} />
						</div>
						<div className="card__face card__face--back">
							<div className="card__content">
								<div className="card__body">
									<h3 className="card__desc__head">Description</h3>
									<div className="underline"></div>
									<div className="card__text">{text}</div>

								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="card__slider__btn__container">
					<button className="btn prev" onClick={prev}>
						<object className='arrow' type="image/svg+xml" data={arrow}>arrow</object>
					</button>
					<button className="btn next" onClick={next}>
						<object className='arrow' type="image/svg+xml" data={arrow}>arrow</object>
					</button>
				</div>
			</div>
			<div className="outside__btns">
				<button onClick={clickhandler}>{isFlipped ? 'view card' : 'view description'}</button>
				{Auth.loggedIn() && previousPage != 'dashboard' ? (
					<button> 
						<Link to="/dashboard" onClick={saveReading}>save reading </Link>
					</button>
				) : null } 
				{Auth.loggedIn() && previousPage === 'dashboard' ?(
					<button> 
						<Link to="/dashboard"> dashboard </Link>
					</button>
				) : null } 
			</div>

		</section>
	)
};

export default Detail;