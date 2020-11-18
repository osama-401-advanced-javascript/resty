import '../components-styles/historyDetails.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { If, Then } from 'react-if';
import ReactJson from 'react-json-view';

export default class historyDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
      method: '',
      body: '',
      result: [],
    };
  }
  showDetalis = (e) => {
    let query = JSON.parse(localStorage.getItem('history'))[e.currentTarget.childNodes[0].id];
    console.log(query.result);
    this.setState({
      url: query.url,
      method: query.method,
      body: query.body,
      result: query.result,
    });
  };

  render() {
    let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];

    return (
      <>
        {history.map((query, index) => {
          return (
            <div id='osama' onClick={this.showDetalis} key={query.method + query.url}>
              <p id={index}>{query.url}</p>
            </div>
          );
        })}
        <If condition={this.state.url !== ''}>
          <Then>
            <div id='details'>
              <p>{this.state.url}</p>
              <p>{this.state.method}</p>
              <p>{this.state.body}</p>
              <div>
                <ReactJson src={this.state.result} theme='isotope' />
                <Link to={{ pathname: '/', query: { url: this.state.url, method: this.state.method, body: this.state.body } }}>Re Run</Link>
              </div>
            </div>
          </Then>
        </If>
      </>
    );
  }
}
