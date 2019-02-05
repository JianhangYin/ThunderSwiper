import React from 'react';
import ThunderSwiper from "../ThunderSwiper/ThunderSwiper";
import './SwiperPanel.styl';

class SwiperPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  switchButtonOpen = () => {
    this.setState({
      isOpen: true,
    });
  };
  switchButtonClose = () => {
    this.setState({
      isOpen: false,
    });
  };
  render() {
    const {
      isOpen,
    } = this.state;
    const {
      match: {
        params: {
          swiperType,
        },
      },
    } = this.props;
    return (
      <div className={'panel'}>
        <div className={'panel-header'}>
          <span>Hello! Welcome to Thunder Swiper!</span>
          <span>This is a great tool displaying your react component on the swiper!</span>
          <span>Button click, mouse event and touch event are all supported!</span>
          <span>Click the button below to test.</span>
          <div
            className={'panel-header-button'}
            onClick={this.switchButtonOpen}
          >
            TRY
          </div>
        </div>
        <ThunderSwiper
          isOpenSwiper={isOpen}
          isCloseSwiper={this.switchButtonClose}
          swipePageTotalNumber={3}
          swiperType={swiperType}
          moduleImported={'./ComponentList'}
        />
      </div>
    );
  }

}

export default SwiperPanel;
