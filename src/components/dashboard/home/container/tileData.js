import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

import { Link } from 'react-router-dom';

export default class MailFolderListItems extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    console.log('Button Clicked!');
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Link to="/dashboard/new-group">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Add New Group" />
          </ListItem>
        </Link>
        <Link to="/dashboard/add-expense">
          <ListItem button>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Add Expense" />
          </ListItem>
        </Link>
      </div>
    );
  }
}
