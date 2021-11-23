import React from "react";
import "./App.css";

/**
 * JournalEntry Props.
 */
 interface JournalEntryProps {
	currentText: string;

	// Define Event Handlers
	textHandler: (event: React.FormEvent<HTMLInputElement>) => void;
	addJournalHandler: () => void;
}


/**
 * JournalEntryPanel Component.
 */
class JournalEntryPanel extends React.Component<JournalEntryProps> {

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div>
				<input
					className="pure-u-12-24"
					type="text"
					onChange={this.props.textHandler}
					value={this.props.currentText}
				/>
				<p />
				<button
					className="pure-button pure-button-primary"
					onClick={this.props.addJournalHandler}
				>
					Add new Journal Entry
				</button>
			</div>
		);
	}
}

export default JournalEntryPanel;