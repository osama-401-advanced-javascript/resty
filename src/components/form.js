import '../components-styles/form.scss';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      method: 'GET',
      url: 'URL',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      method: e.target.method.value,
      url: e.target.url.value,
    });
    // console.log(this.state.url);
    fetch(this.state.url)
      .then((response) => response.json())
      .then((data) => {
        // console.log('im the data', data);

        const response = data;
        const count = response.length;
        // console.log(response);
        this.props.handler(count, response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <main>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>URL :</label>
            <input id='url' type='url' name='url' placeholder='url' required />
            <button data-testid='button' type='submit'>
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
          </form>
        </div>
      </main>
    );
  }
}

export default Form;
