import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './container/Main';
import SwiperPanel from './container/SwiperPanel';

export default (
  <Router>
    <div>
      <Route exact path={'/'} component={Main}/>
      <Route path={'/:swiperType'} component={SwiperPanel}/>
    </div>
  </Router>
);
