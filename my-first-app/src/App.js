import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import {
  Treemap, Visualization
} from '@gooddata/react-components';
import './App.css';
import { Test } from './components/Test';

class App extends Component {
  render() {
    const projectId = 'jm8bsdakbhujk1a254h25a6mtd6orn9g';

    const measure = {
      measure: {
        localIdentifier: 'm1',
        definition: {
          measureDefinition: {
            item: {
              uri: '/gdc/md/jm8bsdakbhujk1a254h25a6mtd6orn9g/obj/62827'
            }
          }
        }
      }
    };
    const view = {
      visualizationAttribute: {
        displayForm: {
          uri: '/gdc/md/jm8bsdakbhujk1a254h25a6mtd6orn9g/obj/324'
        },
        localIdentifier: '02b7736f6bef48b1849798e430d837df'
      }};
    const stack = {
      visualizationAttribute: {
      displayForm: {
        uri: '/gdc/md/jm8bsdakbhujk1a254h25a6mtd6orn9g/obj/952'
      },
      localIdentifier: 'bc5257e06a9342ec99854bd1a53f3262'
    }};

    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: 600, height: 800}}>
            <Treemap
              projectId={projectId}
              measures={[measure]}
              viewBy={view}
              segmentBy={stack}
            />
          </div>
          <div style={{width: 600, height: 800}}>
            <Visualization projectId={projectId} uri={'/gdc/md/jm8bsdakbhujk1a254h25a6mtd6orn9g/obj/75599'} />
          </div>
          <Test />
        </header>
      </div>
    );
  }
}

export default App;
