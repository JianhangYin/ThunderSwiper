import React from 'react';
import './Page3.styl';
import { Link } from 'react-router-dom';

class Page3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'My friend'
    }
  }
  inputUserName = (event) => {
    this.setState({
      userName: event.target.value
    })
  };
  render() {
    const {
      userName
    } = this.state;
    return (
      <div className={'loginPage'}>
        <h1>Welcome Back! {userName}</h1>
        <input className={'loginPage_input'} type={'text'} placeholder={'enter your username'}
               onChange={this.inputUserName}/>
        <Link to={'/'}>back</Link>
      </div>
    );
  }

}

export default Page3;
