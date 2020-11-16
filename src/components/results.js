import '../components-styles/results.scss';
import React from 'react';
import ReactJson from 'react-json-view';
const results = (props) => {
  // console.log(props);
  return (
    <div data-testid='count' className='json-div'>
      <p>count :{props.count}</p>
      <ReactJson id='json-pretty' name='response' src={props.response} theme='monokai' />;
    </div>
  );
};

export default results;
