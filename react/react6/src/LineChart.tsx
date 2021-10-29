import React from "react";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory";

/**
 * Basic LineChart Component.
 */
class LineChart extends React.Component {
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
			{ x: 5, y: 6 },
		];

		return (
			<div className="victory_chart">
				<VictoryChart theme={VictoryTheme.material}>
					<VictoryLine data={sampleData} />
				</VictoryChart>
			</div>
		);
	}
}

export default LineChart;
