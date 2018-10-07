import React, { Component } from 'react';
import {
  Input,
  Table,
  TableBody,
  TableHead,
  Animation,
  Button,
  Fa
} from 'mdbreact';

export default class AddTransaction extends Component {
  state = {
    loading: false
  };

  submitHandler = async () => {};

  render() {
    let id = 0;
    function createData(sr_no, address) {
      id += 1;
      return { id, sr_no, address };
    }

    const rows = [
      createData(1, '0xajehdascnwoivecn'),
      createData(2, '0xrtihsadoijwefoww'),
      createData(3, '0xkdsfvreopjmwfwcd'),
      createData(4, '0xkdsfvreopjmwfwcd')
    ];

    return (
      <div
        className="container"
        style={{ textAlign: 'center', marginTop: 2 + 'rem' }}
      >
        <h2>Add Expense</h2>

        <form autoComplete="off">
          <div className="w-75 m-auto">
            <div>
              <Input label="Amount" size="sm" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <Input type="text" label="Description of the transaction" />
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Table hover>
              <TableHead>
                <tr>
                  <th>Serial Number</th>
                  <th>Address</th>
                  <th>Amount</th>
                </tr>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <tr key={row.id}>
                      <td
                        component="th"
                        scope="row"
                        style={{ verticalAlign: 'middle' }}
                      >
                        {row.sr_no}
                      </td>
                      <td style={{ verticalAlign: 'middle' }}>{row.address}</td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <Input
                          size="sm"
                          className="w-50 h-25"
                          style={{ float: 'right' }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          <div className="text-center">
            {this.state.loading ? (
              <Animation type="fadeIn">
                <Button
                  outline
                  color="info"
                  size="lg"
                  style={{ width: '200px' }}
                >
                  Adding
                  <Fa icon="refresh" spin fixed />
                </Button>
              </Animation>
            ) : (
              <Animation type="fadeIn">
                <Button
                  size="lg"
                  outline
                  color="primary"
                  onClick={this.submitHandler}
                  style={{ width: '200px' }}
                >
                  Add
                </Button>
              </Animation>
            )}
          </div>
          <br />
          <br />
          <br />
        </form>
      </div>
    );
  }
}
