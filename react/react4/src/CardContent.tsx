import React from "react";
import "./App.css";

/**
 * Card Content Component.
 */
class CardContent extends React.Component {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div className="card_content">
				Lizards are a widespread group of squamate reptiles, with over 6,000 species,
				ranging across all continents except Antarctica...
			</div>
		);
	}
}

export default CardContent;
