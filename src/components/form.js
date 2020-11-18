import '../components-styles/form.scss';
import React from 'react';
import superagent from 'superagent';
import { If, Then } from 'react-if';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      method: 'GET',
      url: 'URL',
      body: '',

      isFetching: false,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      method: e.target.method.value,
      url: e.target.url.value,
      body: e.target.body.value,

      isFetching: true,
    });

    return superagent[this.state.method](this.state.url)
      .send(this.state.body)
      .then((data) => {
        // console.log('im the data', data);
        let query = { url: this.state.url, method: this.state.method, body: this.state.body, result: data.body.results };
        let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
        let check = false;
        history.forEach((item) => {
          if (item.url === query.url && item.method === query.method) {
            check = true;
          }
        });
        this.setState({ isFetching: false });
        if (check) {
          let response = data;
          const count = data.body.count;
          this.props.handler(count, response);
        } else {
          history.push(query);
          localStorage.setItem('history', JSON.stringify(history));

          const response = data;
          const count = response.length;
          this.props.handler(count, response);
        }
      })
      .catch((error) => {
        this.setState({ isFetching: false });
        let response = error.message;
        this.props.handler(0, response);
      });
  };

  render() {
    console.log('this is the props', this.props.location);
    return (
      <main>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>URL :</label>
            <input id='url' type='url' name='url' placeholder='url' required />
            <button id='btn' data-testid='button' type='submit'>
              GO!
            </button>
            <br />
            <input type='radio' id='get' name='method' value='get' required />
            <label>GET</label>
            <input type='radio' id='post' name='method' value='post' required />
            <label>POST</label>
            <input type='radio' id='put' name='method' value='put' required />
            <label>PUT</label>
            <input type='radio' id='delete' name='method' value='delete' required />
            <label>DELETE</label>
            <textarea id='body' name='body'></textarea>
          </form>
        </div>
        <If condition={this.state.isFetching === true}>
          <Then>
            <div id='img-div'>
              <img src='https://media.giphy.com/media/3ohzdOrcdpiD26TPt6/giphy.gif' alt='loading' width='50px'></img>
            </div>
          </Then>
        </If>
      </main>
    );
  }
}

export default Form;
