import React from "react";
import "./App.css";

/**
 * Properties Specific to this React Component.
 */
type CardContentProps = {
	text: string
}

/**
 * Card Content Component.
 */
class CardContent extends React.Component<CardContentProps> {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div className="card_content">
				{this.props.text}
			</div>
		);
	}
}

export default CardContent;
