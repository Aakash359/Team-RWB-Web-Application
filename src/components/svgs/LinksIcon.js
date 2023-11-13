import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class LinksIcon extends Component {
  render() {
    return (
      <svg
        className={this.props.className}
        viewBox="0 0 16 16"
        width={this.props.width}
        height={this.props.height}>
        <g data-name="Layer 2">
          <path fill="none" d="M0 0h16v16H0z" />
          <path
            d="M13.71 12.59l-1.15 1.14a2.25 2.25 0 01-3.18 0l-1.61-1.64a2.23 2.23 0 01-.65-1.58 2.29 2.29 0 01.69-1.63l-.69-.69a2.25 2.25 0 01-3.21 0l-1.63-1.6A2.22 2.22 0 011.62 5a2.28 2.28 0 01.67-1.59l1.15-1.14a2.25 2.25 0 013.18 0l1.61 1.64a2.23 2.23 0 01.65 1.58 2.29 2.29 0 01-.69 1.63l.69.69a2.25 2.25 0 013.21 0l1.63 1.63a2.22 2.22 0 01.66 1.56 2.28 2.28 0 01-.67 1.59zM7.16 5L5.55 3.34A.75.75 0 005 3.12a.77.77 0 00-.53.22L3.34 4.48a.73.73 0 00-.22.52.75.75 0 00.22.53L5 7.16a.74.74 0 00.53.21.7.7 0 00.56-.25c-.26-.25-.56-.47-.56-.87a.76.76 0 01.75-.75c.4 0 .62.3.87.56a.72.72 0 00.26-.57.77.77 0 00-.25-.49zm5.5 5.51L11 8.84a.75.75 0 00-.53-.22.71.71 0 00-.56.26c.26.25.56.47.56.87a.76.76 0 01-.75.75c-.4 0-.62-.3-.87-.56a.72.72 0 00-.26.57.77.77 0 00.22.53l1.61 1.62a.74.74 0 00.53.21.76.76 0 00.53-.21l1.15-1.14a.73.73 0 00.22-.52.75.75 0 00-.19-.53z"
            fill={this.props.tintColor}
          />
        </g>
      </svg>
    );
  }
}

LinksIcon.defaultProps = {
  width: 24,
  height: 24,
  tintColor: '#bf0d3e',
};

LinksIcon.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tintColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};