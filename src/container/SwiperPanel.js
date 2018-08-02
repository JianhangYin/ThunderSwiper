import React from 'react';
import ThunderSwiper from "../ThunderSwiper/ThunderSwiper";
import '../Stylus/SwiperPanel.styl';

class SwiperPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }

    switchButtonOpen = () => {
        this.setState({
            isOpen: true
        });
    }

    swithButtonClose = () => {
        this.setState({
            isOpen: false
        })
    }


    render() {
        const {
            isOpen
        } = this.state;
        return (
            <div className={'swiper_panel'}>
                <input type={'submit'} value={'Click to open swiper'} onClick={this.switchButtonOpen}/>
                <ThunderSwiper
                    isOpenSwiper={isOpen}
                    isCloseSwiper={this.swithButtonClose}
                    swipePageTotalNumber={3}
                    swiperType={'navigation'}
                />
            </div>
        );
    }

}

export default SwiperPanel;
