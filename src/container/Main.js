import React from 'react';
import { Link } from 'react-router-dom';
import './Main.styl';

class Main extends React.Component {
  render() {
    return (
      <div className={'main'}>
        <div>Press the button to enter the swiper page</div>
        <Link to={'/navigation'}>
          <div className={'main-button'}>Navigation</div>
        </Link>
        <Link to={'/web_horizontal'}>
          <div>Web Horizontal</div>
        </Link>
        <Link to={'/web_vertical'}>
          <div>Web Vertical</div>
        </Link>
        <Link to={'/wap_horizontal'}>
          <div>Wap Horizontal</div>
        </Link>
        <Link to={'/wap_vertical'}>
          <div>Wap vertical</div>
        </Link>
      </div>
    );
  }

}

export default Main;
