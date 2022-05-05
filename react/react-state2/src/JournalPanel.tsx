import React from "react";
import "./App.css";

/**
 * Journal Entry Interface.
 */
interface JournalEntry {
	timeStamp:  Date;
	textEntry:  string;
}

/**
 * Journal State Interface.
 */
interface JournalState {
	currentText: string;
	journalList: JournalEntry[];
}

/**
 * JournalPanel Component.
 */
class JournalPanel extends React.Component<{}, JournalState> {
	/**
	 * Initialize Log State.
	 */
	constructor(props: {}) {
		super(props);
		this.state = {
			currentText: "",
			journalList: []
		};

		// This binding is necessary to make `this` work in the callback
		this.handleTextChange = this.handleTextChange.bind(this);
		this.handleAddJournalItem = this.handleAddJournalItem.bind(this);		
	}

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		let journalRows = this.state.journalList.map(this.getJournalRow)
		return (
			<div>
				<h1 className="post-title">Mini Journal</h1>
				<input className="pure-u-12-24" type="text" onChange={this.handleTextChange}
					value={this.state.currentText} />
				<p/>
				<button className="pure-button pure-button-primary"
					onClick={this.handleAddJournalItem}>Add new Journal Entry</button>
				<p/>
				<table className="pure-table">
					<thead>
						<tr>
							<th>Timestamp</th>
							<th>Entry</th>
						</tr>
					</thead>
					<tbody>
					{journalRows}
					</tbody>
				</table>
			</div>
		);
	}

	/**
	 * Gets the Journal Row.
	 */
	 getJournalRow(journalItem:JournalEntry) {
		 return (
			<tr key={journalItem.timeStamp.toString()}>
				<td>{journalItem.timeStamp.toString()}</td>
				<td>{journalItem.textEntry}</td>
			</tr>
		 );
	}

	/**
	 * Triggered when user enters text into the Text Box.
	 */
	handleTextChange(event: React.FormEvent<HTMLInputElement>) {
		let newTextValue = event.currentTarget.value;
		console.log("Got Text Change:  " + newTextValue);
		let journalList = this.state.journalList;
		this.setState({
			currentText: newTextValue,
			journalList: journalList
		});
	}

	/**
	 * Triggered when user clicks the Add Button.
	 */
	handleAddJournalItem() {
		let journalList = this.state.journalList;
		if (this.state.currentText) {
			console.log("Adding new journal item:  " + this.state.currentText);
			let currentTime = new Date();
			let newEntry: JournalEntry = {
				timeStamp: currentTime,
				textEntry: this.state.currentText
			}
			journalList.push(newEntry);
			this.setState({
				currentText: "",
				journalList: journalList
			});
		}
	}
}

export default JournalPanel;
