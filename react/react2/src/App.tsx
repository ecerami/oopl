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
		return (
			<div>
				<div className="header">
					<h1 className="brand-title">A Sample Blog</h1>
					<h2 className="brand-tagline">Creating a blog layout using Pure</h2>
				</div>
				<a className="pure-button pure-button-primary" href="#">
					A Primary Button
				</a>
        <p/>
				<table className="pure-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Make</th>
							<th>Model</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Honda</td>
							<td>Accord</td>
							<td>2009</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Toyota</td>
							<td>Camry</td>
							<td>2012</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Hyundai</td>
							<td>Elantra</td>
							<td>2010</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default App;
