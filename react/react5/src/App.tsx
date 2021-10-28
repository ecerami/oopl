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
        <Card img="reptile.jpeg" title="Lizard"
          text="Lizards are a widespread group of squamate reptiles..."/>
        <Card img="frog.jpeg" title="Frog"
          text="Frogs are found on every continent..."/>
      </div>
    );
  }
}

export default App;

