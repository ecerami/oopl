import React from "react";
import "./App.css";
import JournalEntry from "./JournalEntry";

/**
 * Journal Table Props.
 */
interface JournalTableProps {
	journalList: JournalEntry[];
}

/**
 * JournalTable Component.
 */
class JournalTable extends React.Component<JournalTableProps> {
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
					</tr>
				</thead>
				<tbody>{journalRows}</tbody>
			</table>
		);
	}

	/**
	 * Gets the Journal Row.
	 */
	getJournalRow(journalItem: JournalEntry) {
		return (
			<tr key={journalItem.timeStamp.getSeconds()}>
				<td>
					{journalItem.timeStamp.toLocaleDateString()}{" "}	
					{journalItem.timeStamp.toLocaleTimeString()}
				</td>
				<td>{journalItem.textEntry}</td>
			</tr>
		);
	}
}

export default JournalTable;
