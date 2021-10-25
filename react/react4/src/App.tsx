import React from 'react';
import Card from './Card';
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
        <Card/>
        <Card/>
      </div>
    );
  }
}

export default App;

