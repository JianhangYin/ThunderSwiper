import React from 'react';
import Img from '../Material/didi.jpeg';
import '../Stylus/Page2.styl'

class Page2 extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className={'didi_img'}>
                <img src={Img} className={'didi_img_content'}/>
            </div>
        );
    }

}

export default Page2;
