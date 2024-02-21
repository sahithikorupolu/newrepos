// ParentComponent.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';

const ParentComponent = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <Router>
      <div>
        <Nav onSearch={handleSearch} />
        <Switch>
          <Route path='/' exact>
            <Home search={search} />
          </Route>
          {/* Add other routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default ParentComponent;
