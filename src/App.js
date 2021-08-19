import './App.css';
import TodoList from './features/todos/components/TodoList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';
import Navbar from './features/todos/components/Navbar';
import { Footer } from 'antd/lib/layout/layout';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="page">
          <Navbar />
          <Switch>
            <Route exact path="/" component={TodoList}/>
            <Route exact path="/done" component={DoneList}/>
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </div>
        <Footer style={{ textAlign: 'center' }}>To-do List ©2021 Created by Ameer Brima</Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
