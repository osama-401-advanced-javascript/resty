import '../components-styles/results.scss';
import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';
const results = (props) => {
  // console.log(props);
  return (
    <If condition={props.response.length === 0}>
      <Then>
        <div data-testid='count' className='json-div'>
          <p>count :0</p>
        </div>
      </Then>
      <Else>
        <div data-testid='count' className='json-div'>
          <p>count :{props.count}</p>
          <div id='jsonPretty'>
            <ReactJson id='json-pretty' name='response' src={props.response} theme='isotope' />;
          </div>
        </div>
      </Else>
    </If>
  );
};

export default results;
