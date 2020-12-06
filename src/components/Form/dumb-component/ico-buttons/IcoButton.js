import React from 'react';
import PropTypes from 'prop-types';

export default function IcoButton({ title, src, onClick, className, alt, imgStyles }) {
  return (
    <abbr title={title}>
      <button type="button" onClick={onClick} className={`reset-button-style pointer ${className}`}>
        <img src={src} alt={alt} className={imgStyles} />
      </button>
    </abbr>
  );
}

IcoButton.defaultProps = {
  title: '',
  className: '',
  alt: '',
  imgStyles: '',
}

IcoButton.propTypes = {
  /**
   * This is used to abbr the title when the content is hovered
   */
  title: PropTypes.string,
  /**
   * This is used to show the the icon in the button 
   */
  src: PropTypes.string.isRequired,
  /**
   * This triggers the click function of the button
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Thsi is used to apply the className to the button
   */
  className: PropTypes.string,
  /**
   * Used to show the alt text of the image
   */
  alt: PropTypes.string,

  /**
   * Apply Styles to images
   */
  imgStyles: PropTypes.string
}


