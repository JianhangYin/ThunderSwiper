import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from "./container/Main";
import SwiperPanel from "./container/SwiperPanel";

export default (
    <Router>
        <div>
            <Route exact path={'/'} component={Main}/>
            <Route path={'/test'} component={SwiperPanel}/>
        </div>
    </Router>
);
