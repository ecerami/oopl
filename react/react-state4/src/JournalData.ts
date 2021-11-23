import JournalEntry from "./JournalEntry";

/**
 * Journal Data Interface.
 */
 interface JournalData {
	currentText: string;
	journalList: JournalEntry[];
}

export default JournalData;