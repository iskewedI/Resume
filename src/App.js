import React from 'react';
import ResumeNavbar from './components/global/ResumeNavbar';
import ExperiencePage from './components/pages/ExperiencePage';
import { Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#333',
      }}
    >
      <ResumeNavbar />

      <Switch>
        <Route path='/Experience'>
          <ExperiencePage />
        </Route>
        <Route path='/Resume'>
          <div>Home</div>
        </Route>
        <Redirect to='/Resume' />
      </Switch>
    </div>
  );
};

export default App;
