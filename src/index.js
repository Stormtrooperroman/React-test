import React from 'react';
import ReactDOM  from 'react-dom';

import Header from './components/header'
import Text from './components/text'
import List from './components/list'

const App =() =>{
  return (
    <div>
      <Header/>
      <Text/>
      <List/>
    </div>
    
  );
} 

ReactDOM.render(<App/>, document.getElementById('root'));