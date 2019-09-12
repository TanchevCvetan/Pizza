import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";

import MainPage from "./components/MainPage";
import ShowMenu from "./components/ShowMenu";
import Cart from "./components/Cart";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='ui container'>
          <Route path='/' component={MainPage} />
          <Route path='/menu' exact component={ShowMenu} />
          <Route path='/cart' exact component={Cart} />
        </div>
      </Router>
    );
  }
}
export default App;
