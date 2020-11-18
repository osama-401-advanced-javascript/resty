import React from 'react';
import './components-styles/reset.scss';

import Form from './components/form.js';
import Results from './components/results.js';
import History from './components/histroy.js';
import HistoryDetails from './components/historyDetails.js';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    count: 0,
    resultArr: [],
  };

  formHandler = (count, response) => {
    this.setState({
      count: count,
      resultArr: response,
    });
  };
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'>
            <Form handler={this.formHandler} />

            <div id='container'>
              <ul>
                <History />
              </ul>

              <Results response={this.state.resultArr} count={this.state.count} />
            </div>
          </Route>
          <Route path='/History'>
            <div id='container'>
              <ul>
                <HistoryDetails />
              </ul>
            </div>
          </Route>
          <Route path='/help'>
            <p>This is help </p>
          </Route>
        </Switch>
      </>
    );
  }
}
export default App;
