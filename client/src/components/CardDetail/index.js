import React, { useState } from 'react';
import alien from '../../assets/images/cards/boujie-alien.png';
import good from '../../assets/images/cards/im-good.png'
import woke from '../../assets/images/cards/woke-up-like-this.png';

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
					<img src={img} className='card-img' alt="" />
				</div>
				<div className="slider-btn-container">
					<button className="prev slider-btn" onClick={prev}>
						<svg className='arrow' width="20" height="33" viewBox="0 0 20 33" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M3 30L16.2535 17.2198C16.6613 16.8266 16.6613 16.1734 16.2535 15.7802L3 3" stroke="#D0A863" stroke-opacity="0.63" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
					<button className="next slider-btn" onClick={next}>
						<svg className='arrow' width="20" height="33" viewBox="0 0 20 33" fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M3 30L16.2535 17.2198C16.6613 16.8266 16.6613 16.1734 16.2535 15.7802L3 3" stroke="#D0A863" stroke-opacity="0.63" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</button>
				</div>
			</div>
			<div>{text}</div>
			<button>VIEW DESCRIPTION</button>
		</section>
	)
};

export default Detail;
