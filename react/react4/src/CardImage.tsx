import React from "react";
import "./App.css";

/**
 * Card Image Component.
 */
class CardImage extends React.Component {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div className="card_image">
				<img alt="Reptile" src="reptile.jpeg" />
			</div>
		);
	}
}

export default CardImage;
