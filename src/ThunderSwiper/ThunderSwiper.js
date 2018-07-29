/**   dependencies   */
import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

/**    StyleSheet    */
import './ThunderSwiper.styl';

/**   SubComponent   */
import * as Content from './ComponentList';

class ThunderSwiper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            swapPageNumber: 1                              /**    the page number     */
        }
        this.previousX = null;                             /** previous X coordinate  */
        this.contentPageArray = [];                        /** Array storing the page */
        window.onmousedown = this.onMouseDown;
        window.onmouseup = this.onMouseUp;
    }

    componentWillMount() {
        Object.keys(Content).forEach(
            (value) => {
                this.contentPageArray.push(Content[value]);
            }
        )
    }

    /**
     * Mouse event
     * @param event
     */
    onMouseDown = (event) => {
        event.stopPropagation();
        this.previousX = event.clientX;
    }

    onMouseUp = (event) => {
        const deltaX = this.previousX - event.clientX;
        if(deltaX > 10) {
            this.swipePageNumberFunction('previous');
        } else if(deltaX < -10) {
            this.swipePageNumberFunction('next');
        }
    }

    /**
     * Click button event
     */
    clickPreviousButton = () => {
        this.swipePageNumberFunction('previous');
    }

    clickNextButton = () => {
        this.swipePageNumberFunction('next');
    }

    /**
     * common function: change the page number
     * @param event
     */
    swipePageNumberFunction = (event) => {
        if(event === 'previous' && this.state.swapPageNumber > 1) {
            this.setState({
                swapPageNumber: this.state.swapPageNumber - 1
            });
        } else if(event === 'next' && this.state.swapPageNumber < this.props.swapPageTotalNumber) {
            this.setState({
                swapPageNumber: this.state.swapPageNumber + 1
            });
        }
    }

    /**
     * common function: swipe the page
     * @param event
     * @returns {*}
     */
    switchPageFunction = (event) => {
        const SelectedComponent = this.contentPageArray[event - 1];
        return(
            <SelectedComponent/>
        )
    }

    render() {
        const {
            swapPageNumber
        } = this.state;

        return(
          <div className={'thunder_swiper'}>
             <div className={'thunder_swiper_previous'} onMouseDown={this.clickPreviousButton}>
             </div>
             <div className={'thunder_swiper_content'}>
                 <ReactCSSTransitionGroup
                     transitionName='swiper_animation'
                     transitionEnterTimeout={300}
                     transitionLeaveTimeout={300}
                 >
                     <div key = {swapPageNumber}>
                     {this.switchPageFunction(swapPageNumber)}
                     </div>
                 </ReactCSSTransitionGroup>
             </div>
             <div className={'thunder_swiper_next'} onMouseDown={this.clickNextButton}>
             </div>
          </div>
        );
    }

}

ThunderSwiper.propTypes = {
    /**
     * Number of the components included in this swaper
     */
    swapPageTotalNumber: PropTypes.number.isRequired,
}

export default ThunderSwiper;
