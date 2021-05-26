import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <RecoilRoot>
    <div>
      <h1>TODOS</h1>
      <AddTodo />
    </div>
    </RecoilRoot>
  );
}

export default App;
