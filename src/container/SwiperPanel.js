import React from 'react';
import ThunderSwiper from "../ThunderSwiper/ThunderSwiper";

class SwiperPanel extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ThunderSwiper
                    swipePageTotalNumber={3}
                    swiperType={'vertical'}
                />
            </div>
        );
    }

}

export default SwiperPanel;
