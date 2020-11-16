import '../components-styles/results.scss';
import React from 'react';
import ReactJson from 'react-json-view';
const results = (props) => {
  console.log(props);
  return (
    <div className='json-div'>
      <ReactJson id='json-pretty' src={(props.count, props.results)} theme='monokai' />;
    </div>
  );
};

export default results;
