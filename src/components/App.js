import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div className="container">
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">Redux Todo App</a>
          </div>
          <div className="collapse navbar-collapse" id="test-example-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Todos">Todos</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
