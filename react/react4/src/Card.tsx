import React from "react";
import "./App.css";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardImage from "./CardImage";

/**
 * Card Component.
 */
class Card extends React.Component {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div className="card">
				<CardImage />
				<CardHeader />
				<CardContent />
			</div>
		);
	}
}

export default Card;
