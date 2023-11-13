import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class SettingsIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        viewBox="0 0 16 16"
        width={this.props.width}
        height={this.props.height}>
        <g data-name="Layer 2">
          <path
            d="M15 9a.35.35 0 01-.26.33l-1.68.25a4.73 4.73 0 01-.36.83c.31.45.64.85 1 1.26a.39.39 0 01.09.23.34.34 0 01-.08.21c-.22.29-1.45 1.63-1.76 1.63a.53.53 0 01-.24-.08l-1.26-1a4.7 4.7 0 01-.83.35 10.61 10.61 0 01-.26 1.69.33.33 0 01-.36.3H7a.33.33 0 01-.33-.27l-.27-1.68a5.26 5.26 0 01-.82-.34l-1.28 1a.38.38 0 01-.23.08.37.37 0 01-.23-.1 11.41 11.41 0 01-1.5-1.53.34.34 0 01-.06-.21.31.31 0 01.07-.21c.31-.42.65-.82 1-1.25a4.42 4.42 0 01-.38-.9l-1.71-.27A.33.33 0 011 9V7a.35.35 0 01.25-.33l1.69-.25a4.43 4.43 0 01.36-.84c-.31-.44-.64-.85-1-1.26a.36.36 0 01-.09-.22.42.42 0 01.08-.21c.22-.3 1.45-1.63 1.76-1.63a.44.44 0 01.24.09l1.26 1A4.7 4.7 0 016.4 3a10.61 10.61 0 01.26-1.69A.33.33 0 017 1h2a.33.33 0 01.33.27L9.59 3a5 5 0 01.83.34l1.29-1a.33.33 0 01.22-.08.41.41 0 01.23.09 11.56 11.56 0 011.5 1.55.3.3 0 01.06.2.31.31 0 01-.07.21c-.31.42-.65.82-1 1.25a4.58 4.58 0 01.38.89l1.67.26A.33.33 0 0115 7zM8 5.67A2.33 2.33 0 1010.33 8 2.33 2.33 0 008 5.67z"
            fill={this.props.tintColor}
          />
          <path fill="none" d="M0 0h16v16H0z" />
        </g>
      </svg>
    );
  }
}

SettingsIcon.defaultProps = {
  width: 24,
  height: 24,
  tintColor: '#bf0d3e',
};

SettingsIcon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
