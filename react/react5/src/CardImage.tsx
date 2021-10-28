import React from "react";
import "./App.css";

/**
 * Properties Specific to this React Component.
 */
type CardImageProps = {
	img: string,
}

/**
 * Card Image Component.
 */
class CardImage extends React.Component<CardImageProps> {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div className="card_image">
				<img alt='Card' src={this.props.img} />
			</div>
		);
	}
}

export default CardImage;
