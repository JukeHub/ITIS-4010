import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import NewsFeed from './components/NewsFeed';
import EducationModule from './components/EducationModule';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/news" component={NewsFeed} />
        <Route path="/education" component={EducationModule} />
        <Route path="/" exact>
          <h1>Welcome to VeriLens</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;