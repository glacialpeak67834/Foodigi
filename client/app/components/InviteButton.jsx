import React from 'react';

const InviteButton = ({ handleClick, text }) => (
  <div className="button">
    <button href="http://example.com"
      className="invite-button"
      onClick={handleClick}
    >
      Invite Your Friends!
    </button>
  </div>
);

InviteButton.propTypes = {
  handleClick: React.PropTypes.func,
};

export default InviteButton;