import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme} from 'victory';

/**
 * Basic BarChart Component.
 */
class BarChart extends React.Component {
	/**
	 * Render JSX Content.
	 * @returns JSX Element.
	 */
	render(): JSX.Element {
		const sampleData = [
			{ quarter: 1, earnings: 13000 },
			{ quarter: 2, earnings: 16500 },
			{ quarter: 3, earnings: 14250 },
			{ quarter: 4, earnings: 19000 },
		];

		return (
			<div className='victory_chart'>
                <VictoryChart  
                    domainPadding={20}
                    theme={VictoryTheme.material}>
				<VictoryBar
					data={sampleData}
					// data accessor for x values
					x="quarter"
					// data accessor for y values
					y="earnings"
				/>
                </VictoryChart>
			</div>
		);
	}
}

export default BarChart;
