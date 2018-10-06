import React, { Component } from 'react';
import { Input } from 'mdbreact';
import { Table, TableBody, TableHead } from 'mdbreact';

export default class AddTransaction extends Component {
  render() {
    let id = 0;
    function createData(sr_no, address) {
      id += 1;
      return { id, sr_no, address };
    }

    const rows = [
      createData(1, '0xajehdascnwoivecn'),
      createData(2, '0xrtihsadoijwefoww'),
      createData(3, '0xkdsfvreopjmwfwcd')
    ];

    return (
      <div
        className="container"
        style={{ textAlign: 'center', marginTop: 3 + 'rem' }}
      >
        <h3>Add Transaction</h3>

        <form autoComplete="off">
          <div>
            <Input label="Amount" size="sm" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <Input type="textarea" label="Description of the transaction" />
            </div>
          </div>

          <div>
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
                      <td component="th" scope="row">
                        {row.sr_no}
                      </td>
                      <td>{row.address}</td>
                      <td numeric>
                        <Input
                          size="sm"
                          className="w-75"
                          style={{ float: 'rightu' }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </form>
      </div>
    );
  }
}
