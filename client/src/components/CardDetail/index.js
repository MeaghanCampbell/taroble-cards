import React, { useState } from 'react';
import arrow from '../../assets/images/arrow-right.svg'
import alien from '../../assets/images/cards/boujie-alien.png';
import good from '../../assets/images/cards/im-good.png'
import woke from '../../assets/images/cards/woke-up-like-this.png';
import { useStoreContext } from "../../utils/GlobalState";

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
	const [state, dispatch] = useStoreContext();
	const { currentReading } = state;
	console.log(currentReading)
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
			<button>SAVE READING</button>
		</section>
	)
};

export default Detail;
