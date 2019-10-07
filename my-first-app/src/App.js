import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import {
  Visualization, Model
} from '@gooddata/react-components';
import './App.css';

const filters = [
  Model.positiveAttributeFilter("label.customer.cid.name", ["/gdc/md/mk6vrbw9jyr9tn8nqcmwfzkxscnh1tqy/obj/417/elements?id=338"]),
  Model.positiveAttributeFilter("label.acquirerbenchmarking.acquirerica.icaname", ["/gdc/md/mk6vrbw9jyr9tn8nqcmwfzkxscnh1tqy/obj/420/elements?id=3119"]),
];

class App extends Component {
  render() {
    const projectId = 'mk6vrbw9jyr9tn8nqcmwfzkxscnh1tqy';

    return (
      <div className="App">
        <header className="App-header">
          <div style={{width: 600, height: 800}}>
            <Visualization projectId={projectId} uri={'/gdc/md/mk6vrbw9jyr9tn8nqcmwfzkxscnh1tqy/obj/751'} filters={filters}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
