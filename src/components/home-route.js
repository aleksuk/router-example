import React from 'react';
import { Route, Link } from 'react-router-dom';
import PublishingRoute from './publishing-route';
import PagesRoute from './pages-route';

function HomeRoute() {
  return (
    <div>
      <div className="nav-bar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publishing">Publishing</Link></li>
          <li><Link to="/pages/home">Pages</Link></li>
        </ul>
      </div>
      <div>
        <h1>App</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis
          commodi cum debitis dicta distinctio ea, eius error et in ipsa ipsam
          laudantium obcaecati placeat, qui repellendus, sequi velit voluptatem!
        </div>
      </div>

      <Route path="/publishing" component={PublishingRoute} />
      <Route path="/pages/:name" component={PagesRoute} />
    </div>
  )
}

export default HomeRoute;
