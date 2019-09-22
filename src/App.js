import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";

import MainPage from "./components/MainPage";
import ShowMenu from "./components/ShowMenu";
import Cart from "./components/Cart";
import styles from "./components/styles/styles.css";
import cardStyle from "./components/styles/cardStyle.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className=''>
          <Route path='/' component={MainPage} />
          <Route path='/menu' exact component={ShowMenu} />
          <Route path='/cart' exact component={Cart} />
        </div>
      </Router>
    );
  }
}
export default App;
