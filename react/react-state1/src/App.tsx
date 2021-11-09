import React from 'react';
import './App.css';
import CountPanel from './CountPanel';

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
          <CountPanel />
        </div>
    );
  }
}

export default App;

