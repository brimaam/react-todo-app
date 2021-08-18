import './App.css';
import TodoList from './features/todos/components/TodoList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';
import Navbar from './features/todos/components/Navbar';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={TodoList}/>
          <Route exact path="/done" component={DoneList}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
