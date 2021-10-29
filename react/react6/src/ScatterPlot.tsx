import React from "react";
import { VictoryScatter, VictoryChart, VictoryTheme } from "victory";

/**
 * Basic ScatterPlot Component.
 */
class ScatterPlot extends React.Component {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		const sampleData = [
			{ x: 1, y: 2 },
			{ x: 2, y: 3 },
			{ x: 3, y: 5 },
			{ x: 4, y: 4 },
			{ x: 5, y: 7 },
		];

		return (
			<div className="victory_chart">
				<VictoryChart theme={VictoryTheme.material}>
					<VictoryScatter
						style={{ data: { fill: "#c43a31" } }}
						size={7}
						data={sampleData}
					/>
				</VictoryChart>
			</div>
		);
	}
}

export default ScatterPlot;
