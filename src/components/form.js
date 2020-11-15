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
  formHandler = (e) => {
    e.preventDefault();
    this.setState({
      method: e.target.method.value,
      url: e.target.url.value,
    });
  };

  render() {
    return (
      <main>
        <div>
          <form onSubmit={this.formHandler}>
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
          <table>
            <thead>
              <tr>
                <td>{this.state.method}</td>
                <td>{this.state.url}</td>
              </tr>
            </thead>
          </table>
        </div>
      </main>
    );
  }
}

export default Form;
