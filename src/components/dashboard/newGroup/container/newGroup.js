import React, { Component } from 'react';
import { Input, Button, Fa, Animation, Card, CardBody } from 'mdbreact';

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
        <Card className="hoverable">
          <CardBody>
            <form className="mt-4">
              <p className="h2-responsive text-center mb-5">Create a Group</p>
              <div className="grey-text w-25 m-auto">
                <Input
                  label="Name of the group"
                  group
                  type="text"
                  value={this.state.groupName}
                  onChange={event =>
                    this.setState({ groupName: event.target.value })
                  }
                />
              </div>
              <div className="w-50 m-auto">
                <div className="grey-text mt-3">
                  <Input
                    label="Participant 1"
                    group
                    type="text"
                    value={this.state.participant1}
                    onChange={event =>
                      this.setState({ participant1: event.target.value })
                    }
                  />
                </div>
                <div className="grey-text">
                  <Input
                    label="Participant 2"
                    group
                    type="text"
                    value={this.state.participant1}
                    onChange={event =>
                      this.setState({ participant1: event.target.value })
                    }
                  />
                </div>
                <div className="grey-text">
                  <Input
                    label="Participant 3"
                    group
                    type="text"
                    value={this.state.participant1}
                    onChange={event =>
                      this.setState({ participant1: event.target.value })
                    }
                  />
                </div>
                <div className="grey-text">
                  <Input
                    label="Participant 4"
                    group
                    type="text"
                    value={this.state.participant1}
                    onChange={event =>
                      this.setState({ participant1: event.target.value })
                    }
                  />
                </div>
              </div>
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
                      outline
                      color="primary"
                      onClick={this.submitHandler}
                    >
                      Create
                    </Button>
                  </Animation>
                )}
              </div>
            </form>
          </CardBody>
        </Card>
      </Animation>
    );
  }
}

export default NewGroup;
