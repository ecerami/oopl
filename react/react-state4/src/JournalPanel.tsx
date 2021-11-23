import "./App.css";
import JournalTable from "./JournalTable";
import JournalData from "./JournalData";
import JournalEntry from "./JournalEntry";
import JournalEntryPanel from "./JournalEntryPanel";
import React from "react";

/**
 * JournalPanel Component.
 */
class JournalPanel extends React.Component<{}, JournalData> {
	/**
	 * Initialize Log State.
	 */
	constructor(props: {}) {
		super(props);
		this.state = {
			currentText: "",
			journalList: [],
		};

		// This binding is necessary to make `this` work in the callback
		this.textHandler = this.textHandler.bind(this);
		this.addJournalHandler = this.addJournalHandler.bind(this);
		this.deleteJournalEntryHandler = this.deleteJournalEntryHandler.bind(this);
	}

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		return (
			<div>
				<h1 className="post-title">Mini Journal</h1>
				<div>
					<JournalEntryPanel 
						currentText={this.state.currentText}
						textHandler={this.textHandler}
						addJournalHandler={this.addJournalHandler}/>
				</div>
				<p/>
				<div className="pure-u-1-2">
					<JournalTable 
						journalList={this.state.journalList}
						deleteJournalEntryHandler = {this.deleteJournalEntryHandler} />
				</div>
			</div>
		);
	}

	/**
	 * Triggered when user enters text into the Text Box.
	 */
	textHandler(event: React.FormEvent<HTMLInputElement>) {
		let newTextValue = event.currentTarget.value;
		console.log("Got Text Change:  " + newTextValue);
		let journalList = this.state.journalList;
		this.setState({
			currentText: newTextValue,
			journalList: journalList,
		});
	}

	/**
	 * Triggered when user clicks the Add Button.
	 */
	addJournalHandler() {
		let journalList = this.state.journalList;
		if (this.state.currentText) {
			console.log("Adding new journal item:  " + this.state.currentText);
			let currentTime = new Date();
			let newEntry: JournalEntry = {
				timeStamp: currentTime,
				textEntry: this.state.currentText,
			};
			journalList.push(newEntry);
			this.setState({
				currentText: "",
				journalList: journalList,
			});
		}
	}

	/**
	 * Triggered when user wants to delete an entry.
	 */
	deleteJournalEntryHandler(index: number) {
		console.log("Deleting Journal Entry:  " + index);
		let journalList = this.state.journalList;
		
		// Note that there is no remove method in JavaScript; we use splice instead.
		journalList.splice(index, 1);
		this.setState({
			currentText: this.state.currentText,
			journalList: journalList,
		});
	}
}

export default JournalPanel;
