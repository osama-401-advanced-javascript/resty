import React from 'react';
import './components-styles/reset.scss';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Form from './components/form.js';
import Results from './components/results.js';

class App extends React.Component {
  state = {
    count: 0,
    resultArr: [],
  };

  formHandler = (count, results) => {
    this.setState({
      count: count,
      resultArr: results,
    });
  };
  render() {
    return (
      <>
        <Header />
        <Form handler={this.formHandler} />
        <Results results={{ count: this.state.count, results: this.state.resultArr }} />
        <Footer />
      </>
    );
  }
}
export default App;
