import '../components-styles/form.scss';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    // init state
    this.state = {
      method: '',
      url: '',
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.setState({
      method: e.target.method.value,
      url: e.target.url.value,
    });
    console.log(this.state.url);
    fetch(this.state.url)
      .then((raw) => raw.json())
      .then((data) => {
        console.log('im the data', data);
        const count = data.length;
        console.log('im the count', count);
        const results = data;

        console.log(count, results);
        this.props.handler(count, results);
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
            <button type='submit'> GO! </button>
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
