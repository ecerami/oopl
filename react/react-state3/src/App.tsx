import React from 'react';
import './App.css';
import JournalPanel from './JournalPanel';

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
          <JournalPanel />
        </div>
    );
  }
}

export default App;

