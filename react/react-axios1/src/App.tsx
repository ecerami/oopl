import React from "react";
import axios from "axios";
import "./App.css";

interface AppState {
	users: any;
}

/**
 * Basic React Component.
 */
class App extends React.Component<{}, AppState> {
	/**
	 * Initialize Empty State.
	 */
	constructor(props: {}) {
		super(props);
		this.state = {
			users: [],
		};
	}

	/**
	 * Get the Set of Users via Axios and JSON PlaceHolder.
	 */
	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			const users = res.data;
			console.log("Got data:  " + users);
			this.setState({
				users: users,
			});
		});
	}

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		let userRows = this.state.users.map(this.getUserRow);
		if (this.state.users) {
			return (
				<div>
					<table className="pure-table">
						<thead>
							<tr>
								<th>User Name</th>
								<th>Name</th>
								<th>Email</th>
							</tr>
						</thead>
						<tbody>{userRows}</tbody>
					</table>
				</div>
			);
		} else {
			return <div>Loading data...</div>;
		}
	}

	getUserRow(user: any) {
		return (
			<tr key={user.username}>
				<td>{user.username}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
			</tr>
		);
	}
}

export default App;
