import React from 'react';
import './Page3.styl';

class Page3 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ''
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
      <div className={'page-3'}>
        <div className={'page-3-question'}>
          Hi, my friend. Can I have your name?
        </div>
        {
          !!userName
          &&
          <div className={'page-3-answer'}>
            My name is {userName}
          </div>
        }
        <input
          className={'loginPage_input'}
          type={'text'}
          placeholder={'enter your username'}
          onChange={this.inputUserName}
        />
      </div>
    );
  }

}

export default Page3;
