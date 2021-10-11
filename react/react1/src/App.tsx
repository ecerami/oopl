import React from 'react';
import './App.css';

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
          <p>Hello, World!</p>
        </div>
    );
  }
}

export default App;

