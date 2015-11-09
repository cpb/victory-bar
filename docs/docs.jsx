import React from 'react';
import ReactDOM from 'react-dom';
import Ecology from 'ecology';
import Radium, { Style } from 'radium';
import {VictoryLabel} from 'victory-label';

import theme from './theme';

@Radium
class Docs extends React.Component {
  render() {
    return (
      <div className="Container">
        <div className="Copy">
          <Ecology
            overview={require('!!raw!./ecology.md')}
            source={require('json!./victory-bar.json')}
            scope={{
              React,
              ReactDOM,
              VictoryLabel,
              VictoryBar: require('../src/components/victory-bar')}}
            playgroundtheme='elegant' />
          <Style rules={theme}/>
        </div>
      </div>
    )
  }
}

if (typeof document !== "undefined") {
  const content = document.getElementById("content");
  ReactDOM.render(<Docs/>, content);  
}

export default Docs;
