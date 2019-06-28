import React from 'react';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import reducers from './redux/reducers/rootReducer'
import LandingPage from './components/views/Landing';
import './App.css';

const store = createStore(reducers, applyMiddleware(ReduxPromise));

/**
 * @method App
 * @description Main app component
 * @returns {undefined}
 */
const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
      </div>
    </Router>
  </Provider>
);

export default App;
