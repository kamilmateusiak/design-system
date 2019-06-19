import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import getMergedClassNames from '../../utils/getMergedClassNames';

import styles from './style.scss';

const cx = classNames.bind(styles);

const baseClass = 'link';

export const Link = props => {
  const {
    href,
    target,
    className,
    inline,
    disabled,
    children,
    ...restProps
  } = props;

  const mergedClassNames = getMergedClassNames(
    cx({
      [baseClass]: true,
      [`${baseClass}--inline`]: inline,
      [`${baseClass}--disabled`]: disabled
    }),
    className
  );

  return (
    <a
      {...restProps}
      className={mergedClassNames}
      href={href}
      target={target}
      disabled={disabled}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  inline: PropTypes.bool,
  disabled: PropTypes.bool
};
