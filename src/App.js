import React from 'react';
import {
  RecoilRoot
} from 'recoil';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <RecoilRoot>
    <div>
      <h1>TODOS</h1>
      <AddTodo />
      <Todos />
    </div>
    </RecoilRoot>
  );
}

export default App;
