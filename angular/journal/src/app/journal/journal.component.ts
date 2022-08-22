import { Component, OnInit } from '@angular/core';
import { JournalEntry } from './entry';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
})
export class JournalComponent implements OnInit {
  // Initialize Journal with Single Entry
  entries: JournalEntry[] = [
    { text: 'Started new journal app.', timestamp: new Date() },
  ];
  currentText = '';

  ngOnInit(): void {}

  /**
   * Add new journal entry.
   */
  addEntry() {
    // check for empty string
    if (this.currentText != "") {
      console.log('Adding new entry:  ' + this.currentText);
      let entry = {
        text: this.currentText,
        timestamp: new Date(),
      };
      this.entries.push(entry);
      // then reset to empty string
      this.currentText = '';
    } else {
      console.log("No text detected.  Ignoring.");
    }
  }

  /**
   * Delete entry at specified index.
   * @param index index value.
   */
  deleteEntry(index: number) {
    console.log('Deleting entry at index:  ' + index);
    // There is no remove method in JavaScript; we use splice instead.
    this.entries.splice(index, 1);
  }
}
