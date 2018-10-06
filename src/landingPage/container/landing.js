import React, { Component } from 'react';
import { Button, Animation } from 'mdbreact';
class Landing extends Component {
  login = () => {};

  render() {
    return (
      <div className="container text-center">
        <Animation type="zoomIn">
          <h1 className="display-1" style={{ marginTop: '220px' }}>
            DiaSplit
          </h1>
        </Animation>

        <Button
          size="lg"
          color="primary"
          style={{ marginTop: '30px' }}
          onClick={this.login}
        >
          Login with MetaMask
        </Button>
      </div>
    );
  }
}

export default Landing;
