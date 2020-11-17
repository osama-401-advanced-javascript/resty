import React from 'react';
import './components-styles/reset.scss';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Form from './components/form.js';
import Results from './components/results.js';
import History from './components/histroy.js';

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
        <Header />
        <ul>
          <History />
        </ul>
        <Form handler={this.formHandler} />
        <Results response={this.state.resultArr} count={this.state.count} />
        <Footer />
      </>
    );
  }
}
export default App;
