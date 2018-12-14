import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar/Avatar';

const styles = ({
  avatar: {
    margin: 0,
    width: 40,
    height: 40,
  },
});

class Message extends React.Component {
  render() {
    const { message, classes } = this.props;
    return (
      <div className="message">
        <Avatar
          src=""
          className={`user ${classes.avatar}`}
        />
        <div className="text">
          {message.text}
        </div>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Message);
