import React from 'react';
import { withRouter } from 'react-router';
import '../Stylus/Main.styl';

class Main extends React.Component {

    constructor() {
        super();
    }


    switchTest = () => {
        this.props.history.push({ pathname: '/test' });
    }

    render() {

        return (
            <div className={'main'}>
                <h1>Press the button to enter the swiper page</h1>
                <input type={"submit"} value={"ThunderSwiperTest"} onClick={this.switchTest}/>
            </div>
        );
    }

}

export default withRouter(Main);
