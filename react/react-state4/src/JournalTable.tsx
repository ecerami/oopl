import React from "react";
import "./App.css";
import JournalEntry from "./JournalEntry";

/**
 * Journal Table Props.
 */
interface JournalTableProps {
	journalList: JournalEntry[];
	deleteJournalEntryHandler: (index: number) => void;
}

/**
 * JournalTable Component.
 */
class JournalTable extends React.Component<JournalTableProps> {
	/**
	 * Initializer.
	 */
	 constructor(journalTableProps: JournalTableProps) {
		super(journalTableProps);

		// This binding is necessary to make `this` work in the callback
		this.getJournalRow = this.getJournalRow.bind(this);
	}

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		let journalRows = this.props.journalList.map(this.getJournalRow);
		return (
			<table className="pure-table">
				<thead>
					<tr>
						<th>Timestamp</th>
						<th>Entry</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>{journalRows}</tbody>
			</table>
		);
	}

	/**
	 * Gets the Journal Row.
	 */
	getJournalRow(journalItem: JournalEntry, index: number) {
		return (
			<tr key={journalItem.timeStamp.getSeconds()}>
				<td>
					{journalItem.timeStamp.toLocaleDateString()}{" "}
					{journalItem.timeStamp.toLocaleTimeString()}
				</td>
				<td>{journalItem.textEntry}</td>
				<td>
					<button
						className="pure-button"
						onClick={this.props.deleteJournalEntryHandler.bind(this, index)}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default JournalTable;
