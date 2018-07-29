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
                    swapPageTotalNumber={3}
                />
            </div>
        );
    }

}

export default SwiperPanel;
