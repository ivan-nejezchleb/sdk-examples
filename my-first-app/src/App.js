import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import {
  Visualization
} from '@gooddata/react-components';
import './App.css';

class App extends Component {
  render() {
    const projectId = 'jm8bsdakbhujk1a254h25a6mtd6orn9g';

    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: 600, height: 800}}>
            <Visualization projectId={projectId} uri={'/gdc/md/jm8bsdakbhujk1a254h25a6mtd6orn9g/obj/75599'} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
