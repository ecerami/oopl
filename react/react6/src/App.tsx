import React from 'react';
import './App.css';
import BarChart from './BarChart';
import LineChart from './LineChart';
import ScatterPlot from './ScatterPlot';

/**
 * Basic React Component.
 */
class App extends React.Component{
  
  /**
   * Render JSX Content.
   * @returns JSX Element.
   */
  render(): JSX.Element {
    return(
        <div>
        <BarChart/>
        <LineChart/>
        <ScatterPlot/>
        </div>
    );
  }
}

export default App;

