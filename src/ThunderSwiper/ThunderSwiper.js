/**   dependencies   */
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/**    StyleSheet    */
import './ThunderSwiper.styl';

/**       img        */
import left_arrow from './Img/left-arrow.png';
import right_arrow from './Img/right-arrow.png';
import close_button from './Img/close.png';

class ThunderSwiper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      swipePageNumber: 1,                            /**    the page number           */
      translateX: 0,                                 /**     distance X moved         */
    };
    this.previousX = null;                           /** previous X coordinate        */
    this.previousY = null;                           /** previous Y coordinate        */
    this.deltaX = 0;                                 /**   delta X coordinate         */
    this.deltaY = 0;                                 /**   delta Y coordinate         */
    this.sumX = 0;                                   /**     summation of X           */
    this.sumY = 0;                                   /**     summation of Y           */
    this.ifMove = false;                             /**    if move or not            */
    this.contentPageArray = [];                      /** Array storing the page       */
    window.onmousedown = this.onMouseDown;
    window.onmouseup = this.onMouseUp;
    window.onmousemove = this.onMouseMove;
    window.ontouchstart = this.onTouchStart;
    window.ontouchend = this.onTouchEnd;
    window.ontouchmove = this.onTouchMove;
  }

  componentDidMount() {
    import(`${this.props.moduleImported}`)
      .then(
        Content => {
          Object.keys(Content).forEach(
            (value) => {
              this.contentPageArray.push(Content[value]);
            }
          )
        }
      )
  }

  /**
   * Mouse event
   * @param event
   */
  onMouseDown = (event) => {
    event.stopPropagation();
    this.ifMove = true;
    this.previousX = event.clientX;
    this.previousY = event.clientY;
    this.sumX = 0;
    this.sumY = 0;
  };

  onMouseUp = () => {
    if (this.sumX > 100 || this.sumY > 100) {
      this.swipePageNumberFunction('next');
    } else if (this.sumX < -100 || this.sumY < -100) {
      this.swipePageNumberFunction('previous');
    }
    this.ifMove = false;
    this.setState({
      translateX: 0,
      translateY: 0,
    });
  };

  onMouseMove = (event) => {
    if (this.ifMove && this.props.swiperType === 'web_horizontal') {
      this.deltaX = this.previousX - event.clientX;
      this.sumX += this.deltaX;
      this.setState({
        translateX: this.state.translateX - this.deltaX,
      });
      this.previousX = event.clientX;

    } else if (this.ifMove && this.props.swiperType === 'web_vertical') {
      this.deltaY = this.previousY - event.clientY;
      this.sumY += this.deltaY;
      this.setState({
        translateY: this.state.translateY - this.deltaY,
      });
      this.previousY = event.clientY;
    }
  };

  /**
   * Touch event
   */
  onTouchStart = (event) => {
    event.stopPropagation();
    this.ifMove = true;
    this.previousX = event.touches[0].clientX;
    this.previousY = event.touches[0].clientY;
    this.sumX = 0;
    this.sumY = 0;
  };
  onTouchEnd = () => {
    if (this.sumX > 100 || this.sumY > 100) {
      this.swipePageNumberFunction('next');
    } else if (this.sumX < -100 || this.sumY < -100) {
      this.swipePageNumberFunction('previous');
    }
    this.ifMove = false;
    this.setState({
      translateX: 0,
      translateY: 0,
    });
  };
  onTouchMove = (event) => {
    if (this.ifMove && this.props.swiperType === 'wap_horizontal') {
      this.deltaX = this.previousX - event.touches[0].clientX;
      this.sumX += this.deltaX;
      this.setState({
        translateX: this.state.translateX - this.deltaX,
      });
      this.previousX = event.touches[0].clientX;
    } else if (this.ifMove && this.props.swiperType === 'wap_vertical') {
      this.deltaY = this.previousY - event.touches[0].clientY;
      this.sumY += this.deltaY;
      this.setState({
        translateY: this.state.translateY - this.deltaY,
      });
      this.previousY = event.touches[0].clientY;
    }
  };

  /**
   * Click button event
   */
  clickPreviousButton = () => {
    this.swipePageNumberFunction('previous');
  };

  clickNextButton = () => {
    this.swipePageNumberFunction('next');
  };

  /**
   * common function: change the page number
   * @param event
   */
  swipePageNumberFunction = (event) => {
    if (event === 'previous' && this.state.swipePageNumber > 1) {
      this.setState({
        swipePageNumber: this.state.swipePageNumber - 1,
      });
    } else if (event === 'next' && this.state.swipePageNumber < this.props.swipePageTotalNumber) {
      this.setState({
        swipePageNumber: this.state.swipePageNumber + 1,
      });
    }
  };

  /**
   * common function: swipe the page
   * @param event
   * @returns {*}
   */
  switchPageFunction = (event) => {
    const SelectedComponent = this.contentPageArray[event - 1];
    if (event > 0 && event < this.props.swipePageTotalNumber + 1) {
      return (
        <SelectedComponent/>
      )
    }
  };

  /**
   * render the different type of swiper
   * @param event
   * @returns {*}
   */
  swiperTypeSelect = (event) => {
    if (event === 'navigation') {
      return (
        <div className={'thunder_swiper'}>
          <img src={left_arrow} className={'thunder_swiper_previous'} alt={'previous'}
               onMouseDown={this.clickPreviousButton}/>
          <div className={'thunder_swiper_content_navigation'}>
            <ReactCSSTransitionGroup
              component="section"
              transitionName='swiper_navigation_animation'
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              style={{height: '100%', width: '100%'}}
            >
              <div
                key={this.state.swipePageNumber}
                className={'thunder_swiper_content_navigation_content'}
              >
                {this.switchPageFunction(this.state.swipePageNumber)}
              </div>
            </ReactCSSTransitionGroup>
          </div>
          {
            this.state.swipePageNumber === this.props.swipePageTotalNumber
            &&
            <img src={close_button} className={'thunder_swiper_close'} alt={'close'}
                 onMouseDown={this.props.isCloseSwiper}/>
          }
          <img src={right_arrow} className={'thunder_swiper_next'} alt={'next'} onMouseDown={this.clickNextButton}/>
        </div>
      );
    } else {
      return (
        <div className={'thunder_swiper_' + event}>
          <div
            className={'thunder_swiper_' + event + '_content'}
            style={
              /horizontal/i.test(event) ?
                {transform: `translateX(${this.state.translateX}px)`}
                :
                {transform: `translateY(${this.state.translateY}px)`}
            }
          >
            <div className={'thunder_swiper_' + event + '_content_previous'}>
              {this.ifMove ? this.switchPageFunction(this.state.swipePageNumber - 1) : null}
            </div>
            <ReactCSSTransitionGroup
              component="section"
              transitionName={
                /horizontal/i.test(event) ?
                  (this.sumX > 0 ?
                    'swiper_' + event + '_left_animation'
                    :
                    'swiper_' + event + '_right_animation')
                  :
                  (this.sumY > 0 ?
                    'swiper_' + event + '_up_animation'
                    :
                    'swiper_' + event + '_down_animation')}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
              style={{height: '100%', width: '100%'}}
            >
              <div className={'thunder_swiper_' + event + '_content_current'} key={this.state.swipePageNumber}>
                {this.switchPageFunction(this.state.swipePageNumber)}
              </div>
            </ReactCSSTransitionGroup>
            <div className={'thunder_swiper_' + event + '_content_next'}>
              {this.ifMove ? this.switchPageFunction(this.state.swipePageNumber + 1) : null}
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    const {
      isOpenSwiper,
      isCloseSwiper,
      swiperType,
    } = this.props;

    return (
      <Modal
        className={'container'}
        isOpen={isOpenSwiper}
        onRequestClose={isCloseSwiper}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
      >
        {this.swiperTypeSelect(swiperType)}
      </Modal>
    );
  }

}

ThunderSwiper.defaultProps = {
  swiperType: 'navigation',
};


ThunderSwiper.propTypes = {
  /**
   * Open this swiper or not
   */
  isOpenSwiper: PropTypes.bool.isRequired,
  /**
   * control switch button
   */
  isCloseSwiper: PropTypes.func.isRequired,
  /**
   * Number of the components included in this swiper
   */
  swipePageTotalNumber: PropTypes.number.isRequired,
  /**
   * Type of the swiper:
   * 'navigation'
   * 'web_horizontal'
   * 'web_vertical'
   * 'wap_horizontal'
   * 'wap_vertical'
   */
  swiperType: PropTypes.string,
  /**
   * the path of module imported in the swiper
   */
  moduleImported: PropTypes.string.isRequired,
};

export default ThunderSwiper;
