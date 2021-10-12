import React from "react";
import "./App.css";

/**
 * Basic React Component.
 */
class App extends React.Component {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		let firstName: string = "Ethan";
		let lastName: string = "Cerami";
		let siteIsActive: boolean = true;
		let stockPrices: number[] = [23, 23.4, 23.6, 23.8, 22];
		let activeBadge = this.getStatusMessage(siteIsActive);
		let stockTable = this.getStockTable(stockPrices);
		return (
			<div>
				Hello from: {firstName} {lastName}
				{activeBadge}
				<p />
				{stockTable}
			</div>
		);
	}

	/**
	 * Illustrates how to perform conditionals in JSX.
	 */
	getStatusMessage(siteIsActive: boolean): JSX.Element {
		if (siteIsActive) {
			return <div>Site is active.</div>;
		} else {
			return <div>Site is currently down for maintenance.</div>;
		}
	}

	/**
	 * Illustrates how to iterate elements in JSX.
	 * @param stockPrices
	 */
	getStockTable(stockPrices: number[]): JSX.Element {
		// Map will call the specified function on each element
		// and return an array of results.
		var tableData = stockPrices.map(this.getStockRow);
		return (
			<table className="pure-table">
				<thead>
					<tr>
						<th>Stock Price</th>
					</tr>
				</thead>
				<tbody>{tableData}</tbody>
			</table>
		);
	}

	getStockRow(stockPrice: number) {
		return (
			<tr>
				<td>{stockPrice}</td>
			</tr>
		);
	}
}

export default App;
