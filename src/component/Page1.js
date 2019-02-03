import React from 'react';
import Img from '../media/wave.gif';
import './Page1.styl';

class Page1 extends React.Component {

  render() {

    return (
      <div className={'page-1'}>
        <div className={'page-1-header'}>
          This is an example of ThunderSwiper
        </div>
        <div className={'page-1-body'}>
          <img
            src={Img}
            draggable={false}
            alt={'wave'}
          />
          <div className={'page-1-body-author'}>
            <a href="//commons.wikimedia.org/wiki/User:Becarlson">
              Becarlson
            </a>
          </div>
        </div>
      </div>
    );
  }

}

export default Page1;
