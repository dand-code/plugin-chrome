import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import AddWord from './components/AddWord';
import Words from './components/Words';

function App() {
  return (
    <RecoilRoot>
    <div>
      <h1>Words</h1>
      <AddWord/>
      <Words />
    </div>
    </RecoilRoot>
  );
}

export default App;
