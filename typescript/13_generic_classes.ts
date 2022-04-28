/**
 * Database: Toy Example.
 */
class Database<T> {
	private records: T[] = [];
	add(element: T): void {
		this.records.push(element);
	}
    numRecords() {
        return this.records.length;
    }
}

let db = new Database<number>();
db.add(5);
db.add(75);
console.log(db.numRecords());