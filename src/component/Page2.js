import React from 'react';
import Img from '../media/didi.jpeg';
import './Page2.styl'

class Page2 extends React.Component {

  render() {
    return (
      <div className={'didi_img'}>
        <img
          src={Img}
          className={'didi_img_content'}
          draggable={false}
          alt={'didi'}
        />
      </div>
    );
  }

}

export default Page2;
