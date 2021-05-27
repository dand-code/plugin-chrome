import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import AddWord from './components/AddWord';
import Words from './components/Words';

function App() {
  return ( 
    <RecoilRoot>
      <h1>Words</h1>
      <AddWord/>
      <Words />
    </RecoilRoot>
  );
}

export default App;
