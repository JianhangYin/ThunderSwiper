import React from 'react';
import { withRouter } from 'react-router';
import '../Stylus/Page3.styl';

class Page3 extends React.Component {

    constructor() {
        super();
        this.state = {
            userName: 'My friend'
        }
    }

    switchBack = () => {
        this.props.history.push({pathname: '/'});
    }

    inputUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    render() {
        const {
            userName
        } = this.state;
        return(
            <div className={'loginPage'}>
                <h1>Welcome Back! {userName}</h1>
                <input className={'loginPage_input'} type={'text'} placeholder={'enter your username'} onChange={this.inputUserName}/>
                <input className={'loginPage_button'} type={'submit'} value={'Back'} onClick={this.switchBack}/>
            </div>
        );
    }

}
export default withRouter(Page3);
