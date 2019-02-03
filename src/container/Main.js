import React from 'react';
import { Link } from 'react-router-dom';
import './Main.styl';

class Main extends React.Component {
  render() {
    return (
      <div className={'main'}>
        <div className={'main-header'}>
          Thunder Swiper
        </div>
        <div className={'main-body'}>
          <Link to={'/navigation'} className={'main-body-button'}>
            Navigation
          </Link>
          <Link to={'/web_horizontal'} className={'main-body-button'}>
            Web Horizontal
          </Link>
          <Link to={'/web_vertical'} className={'main-body-button'}>
            Web Vertical
          </Link>
          <Link to={'/wap_horizontal'} className={'main-body-button'}>
            Wap Horizontal
          </Link>
          <Link to={'/wap_vertical'} className={'main-body-button'}>
            Wap vertical
          </Link>
        </div>
      </div>
    );
  }

}

export default Main;
