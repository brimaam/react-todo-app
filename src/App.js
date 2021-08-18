import './App.css';
import TodoList from './features/todos/components/TodoList';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneList from './features/todos/components/DoneList';
import { Tabs } from 'antd';

function App() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <React.Fragment>
      <BrowserRouter>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>

        <ul className="text-center">
          <Link to="/">|todo list|</Link>
          <Link to="/done"> |done list|</Link>
        </ul>
        <Switch>
          <Route exact path="/" component={TodoList}></Route>
          <Route exact path="/done" component={DoneList}></Route>
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
