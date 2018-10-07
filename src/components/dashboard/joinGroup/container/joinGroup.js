import React, { Component } from 'react';
import { Input, Button, Fa, Animation } from 'mdbreact';

class NewGroup extends Component {
  state = {
    groupName: '',
    participant1: '',
    participant2: '',
    participant3: '',
    participant4: '',
    loading: false
  };

  submitHandler = async () => {
    console.log('Fired');
    this.setState({ loading: true });
  };

  render() {
    return (
      <Animation type="fadeIn">
        <form style={{ marginBottom: '300px', marginTop: '180px' }}>
          <p className="h1-responsive text-center mb-5">Join a Group</p>
          <div className="text-center">
            {this.state.loading ? (
              <Animation type="fadeIn">
                <Button outline color="info">
                  Creating
                  <Fa icon="refresh" spin fixed />
                </Button>
              </Animation>
            ) : (
              <Animation type="fadeIn">
                <Button
                  style={{ width: '200px' }}
                  outline
                  color="primary"
                  onClick={this.submitHandler}
                >
                  Join
                </Button>
              </Animation>
            )}
          </div>
        </form>
      </Animation>
    );
  }
}

export default NewGroup;
