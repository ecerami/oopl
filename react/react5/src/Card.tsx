import React from "react";
import "./App.css";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardImage from "./CardImage";

/**
 * Properties Specific to this React Component.
 */
type CardProps = {
	img: string;
	title: string;
	text: string;
};

/**
 * Card Component.
 */
class Card extends React.Component<CardProps> {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div className="card">
				<CardImage img={this.props.img} />
				<CardHeader title={this.props.title} />
				<CardContent text={this.props.text} />
			</div>
		);
	}
}

export default Card;
