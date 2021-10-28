import React from "react";
import "./App.css";

/**
 * Properties Specific to this React Component.
 */
type CardHeaderProps = {
	title: string,
}

/**
 * Card Header Component.
 */
class CardHeader extends React.Component<CardHeaderProps> {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return <div className="card_header">{this.props.title}</div>;
	}
}

export default CardHeader;
