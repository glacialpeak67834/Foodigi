import React from 'react';

const RandomButton = ({ handleClick, text }) => (
  <div className="button">
    <div className="round-button">
      <div className="round-button-circle">
        <randombutton
          href="http://example.com"
          className="go-button"
          onClick={handleClick}
        >
          {text}
        </randombutton>
      </div>
    </div>
  </div>
);

RandomButton.propTypes = {
  handleClick: React.PropTypes.func,
  text: React.PropTypes.string,
};

export default RandomButton;
