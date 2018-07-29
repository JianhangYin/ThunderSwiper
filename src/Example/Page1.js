import React from 'react';
import '../Stylus/Page1.styl';

class Page1 extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className={'page1_container'}>
                <h1>
                    This is an example of ThunderSwiper
                </h1>
                <div className={'page1_container_content'}>
                    <dl>
                        <dt>Feature</dt>
                        <dd>- swipe the JS element in your page</dd>
                        <dd>- both button click and mouse event are supported</dd>
                        <dd>- flexible</dd>
                    </dl>
                </div>
            </div>
        );
    }

}

export default Page1;
