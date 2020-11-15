import React from 'react';
import './components-styles/reset.scss';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Form from './components/form.js';

function App() {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
}
export default App;
// class Main extends React.Component {
//   constructor(props) {
//     super(props);
//     // init state
//     this.state = { words: 'nothing to see here' };
//     // we cant directly change the state
//     // if you dont create arrow functions you would have to bind
//     // this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange = (e) => {
//     console.log('hi', this.state);
//     this.setState({ words: e.target.value });
//     /// DONT UPDATE THE STATE DIRECTLY
//     // this.state.words = e.target.value;
//     console.log('helloooooo', this.state);
//   };
//   handleClick = () => {
//     const words = this.state.words.split('').reverse().join('');
//     this.setState({ words }); /// {words:"reverse"}
//     console.log('hello');
//   };
//   render() {
//     return (
//       <main>
//         <h3>{this.state.words}</h3>
//         <input type='text' onChange={this.handleChange} />
//         <button onClick={this.handleClick}>Click</button>
//       </main>
//     );
//   }
// }
// //functional component | stateless component
// function App() {
//   return (
//     <>
//       <Header />
//       <Form />
//       <Footer />
//     </>
//   );
// }

// export default App;
