import React, { Component } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from './header';
import Sidebar from './sidebar';

//Redux Store
import store from './components/store';

//Routes
import Home from './components/home';
import Mobiles from './components/mobiles';
import Latops from './components/laptops';
import laptops from './components/laptops';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className='layout'>
            <Header />
            <div className='content'>
              <Sidebar />
              <div>
                <Route exact path='/' component={Home} />
                <Route path='/mobiles' component={Mobiles} />
                <Route path='/laptops' component={laptops} />
              </div>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
