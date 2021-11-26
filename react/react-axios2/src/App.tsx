import React from "react";
import axios from "axios";
import "./App.css";

interface AppState {
	photos: any;
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
			photos: [],
		};
	}

	/**
	 * Get the Set of Photos via Axios and JSON PlaceHolder.
	 */
	componentDidMount() {
		axios.get("https://jsonplaceholder.typicode.com/albums/1/photos").then((res) => {
			const photos = res.data;
			console.log("Got data:  " + photos);
			this.setState({
				photos: photos,
			});
		});
	}

	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		if (this.state.photos) {
			let photoRows = this.state.photos.map(this.getUserRow);
			return (
				<div>
					<table className="pure-table">
						<thead>
							<tr>
								<th>Album ID</th>
								<th>Title</th>
								<th>Thumbnail</th>
							</tr>
						</thead>
						<tbody>{photoRows}</tbody>
					</table>
				</div>
			);
		} else {
			return <div>Loading data...</div>;
		}
	}

	getUserRow(photo: any) {
		return (
			<tr key={photo.url}>
				<td>{photo.albumId}</td>
				<td>{photo.title}</td>
				<td>
					<img alt="Thumbnail" src={photo.thumbnailUrl} />
				</td>
			</tr>
		);
	}
}

export default App;
