import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import AddWord from './components/AddWord';
import Words from './components/Words';

function App() {
  return ( 
    <RecoilRoot>
      <div className="page">
        <header>
          <h1>Words</h1>
        </header>
        <main>
          <AddWord/>
          <Words />
        </main>
      </div>
      
    </RecoilRoot>
  );
}

export default App;
