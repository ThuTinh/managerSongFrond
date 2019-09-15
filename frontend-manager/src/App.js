import React from 'react';
import HomePage from './pages/homePage/homePage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import routes from './route'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/menu/menu';
library.add(faEdit, faEye, faTrash)


function App() {
  return (
    <Router>
      <div>
        <Menu></Menu>
        <div className="row">
          <div className="col-12">
            {showPage(routes)}
          </div>
        </div>
      </div>

    </Router>
  );
}

const showPage = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((item, index) => {
      return <Route key={index} path={item.path} exact={item.exact} component={item.main} ></Route>
    });
  }
  return <Switch>{result}</Switch>;

}

export default App;
