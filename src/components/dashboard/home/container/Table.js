import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableHead } from 'mdbreact';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData('Dinner at Barbique Nation', 70),
  createData('Pizzas order @Zomato', 33),
  createData('Uber ride till BTM Layout', 45),
  createData('Beer at Windmills + Xbox arena passes', 57)
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Table hover>
      <TableHead>
        <tr>
          <th>Expenditure Details</th>
          <th numeric>Amount</th>
        </tr>
      </TableHead>
      <TableBody>
        {rows.map(row => {
          return (
            <tr className={classes.row} key={row.id}>
              <td component="th" scope="row">
                {row.name}
              </td>
              <td numeric>{row.calories}</td>
              <td numeric>{row.fat}</td>
              <td numeric>{row.carbs}</td>
              <td numeric>{row.protein}</td>
            </tr>
          );
        })}
      </TableBody>
    </Table>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
