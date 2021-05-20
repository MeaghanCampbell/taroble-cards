import React, { useState } from 'react'

const cards = [
	{
		img: "https://images.pexels.com/photos/2843273/pexels-photo-2843273.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		id: new Date().getTime().toString(),
		text: "First Image"
	},
	{
		img: "https://images.pexels.com/photos/3363695/pexels-photo-3363695.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		id: new Date().getTime().toString(),
		text: "Sceond Image"
	},
	{
		img: "https://images.pexels.com/photos/6944355/pexels-photo-6944355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		id: new Date().getTime().toString(),
		text: "Last Image"
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
			<h2>Past</h2>
			<div className="slider-container">
				<div className="image-slider">
					<img src={img} alt="" />
				</div>
				<div className="slider-btns">
					<button className="prev navigation-btn" onClick={prev}>prev</button>
					<button className="next navigation-btn" onClick={next}>next</button>
				</div>
			</div>
			<div>{text}</div>
			<button className="btn-description">view description</button>
		</section>
	)
};

export default Detail;
