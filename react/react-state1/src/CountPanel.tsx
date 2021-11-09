import React from "react";
import "./App.css";

/**
 * Counter State Interface.
 */
interface CounterState {
	counter: number;
}

/**
 * Count Component.
 */
class CountPanel extends React.Component<{}, CounterState> {
	/**
	 * Initialize Counter State.
	 */
	constructor(props: {}) {
		super(props);
		this.state = {
			counter: 0
		};
	}

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div>
				<h1>Current Counter: {this.state.counter}</h1>
				<button onClick={() => this.handleAddClick()}>Add</button>
				<button onClick={() => this.handleSubtractClick()}>Subtract</button>
			</div>
		);
	}

	handleAddClick() {
		let updatedCounter = this.state.counter + 1;
		this.updateCounterState(updatedCounter);
	}

	handleSubtractClick() {
		let updatedCounter = this.state.counter - 1;
		this.updateCounterState(updatedCounter);
	}

	updateCounterState(counter: number) {
		this.setState({
			counter: counter,
		});
	}
}

export default CountPanel;
