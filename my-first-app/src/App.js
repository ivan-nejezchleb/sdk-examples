import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import {
  AttributeFilter, Visualization
} from '@gooddata/react-components';
import './App.css';

const projectId = 'x3k4294x4k00lrz5degxnc6nykynhh52';

class App extends Component {
  state = {
    filters: []
  }

  onApply = (filter) => {
    console.log('AttributeFilterExample filter', filter);
    const isPositive = !!filter.in;
    const elementsProp = isPositive ? 'in' : 'notIn';
    const filters = [{
      [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
        displayForm: {
          identifier: filter.id
        },
        [elementsProp]: filter[elementsProp].map(element => (`/gdc/md/${projectId}/obj/1251/elements?id=${element}`))
      }
    }];
    this.setState({
      filters
    });
  }

  render() {
    const {
      filters
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div style={{ height: 400, width: 600 }}>
            <AttributeFilter
             identifier={"label.activity.activitytype"}
             projectId={projectId}
             fullscreenOnMobile={false}
             onApply={this.onApply}
            />
          </div>
          <div style={{width: 600, height: 800}}>
            <Visualization
              projectId={projectId}
              identifier={'aahiOE6Viy6q'}
              filters={filters}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
