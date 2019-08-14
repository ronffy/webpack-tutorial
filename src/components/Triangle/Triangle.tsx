import React, { SFC, CSSProperties } from 'react';
import classNames from 'classnames';
import { OnClick } from '../../config/types';
import './index.less';

enum ANGLE_TYPE { top = 'top', RIGHT = 'right', BOTTOM = 'bottom', LEFT = 'left' };
enum ANGLE_SIZE { LARGE = 'large', SMALL = 'small', DEFAULT = 'default' };

type AngleType = 'top' | 'right' | 'bottom' | 'left';
type AngleSize = 'large' | 'small' | 'default';

interface Props {
  onClick?: OnClick<HTMLDivElement>;
  color?: string;
  size?: AngleSize | number;
  type?: AngleType;
  className?: string;
  style?: CSSProperties
}

const defaultProps = {
  color: '#d1d5da',
  size: ANGLE_SIZE.DEFAULT,
  type: ANGLE_TYPE.LEFT,
}

const Triangle: SFC<Props> = React.memo(({
  onClick,
  color = defaultProps.color,
  size = defaultProps.size,
  type = defaultProps.type,
  style,
  className,
}) => {
  if (typeof size === 'string') {
    switch (size) {
      case ANGLE_SIZE.LARGE:
        size = 10;

      case ANGLE_SIZE.SMALL:
        size = 5;
        break;

      case ANGLE_SIZE.DEFAULT:
      default:
        size = 7;
        break;
    }
  } else if (typeof size !== 'number') {
    console.warn('size 数据格式有误，已设置为默认值为7');
    size = defaultProps.size;
  }

  let _style = {};
  const assistBorder = `${size}px solid transparent`;
  const mainBorder = `${size}px solid ${color}`;
  switch (type) {
    case ANGLE_TYPE.top:
      _style = {
        borderLeft: assistBorder,
        borderRight: assistBorder,
        borderBottom: mainBorder,
        borderTop: 0,
      }
      break;
    case ANGLE_TYPE.RIGHT:
      _style = {
        borderLeft: mainBorder,
        borderRight: 0,
        borderBottom: assistBorder,
        borderTop: assistBorder,
      }
      break;
    case ANGLE_TYPE.BOTTOM:
      _style = {
        borderLeft: assistBorder,
        borderRight: assistBorder,
        borderTop: mainBorder,
        borderBottom: 0,
      }
      break;
    case ANGLE_TYPE.LEFT:
      _style = {
        borderRight: mainBorder,
        borderLeft: 0,
        borderBottom: assistBorder,
        borderTop: assistBorder,
      }
      break;
    default:
      break;
  }

  const classes = classNames('u-triangle', className);
  const props: Props = {
    className: classes,
    style: {
      ...style,
      ..._style,
    }
  };
  if (onClick) {
    props.onClick = onClick;
  }

  return (
    <i {...props}></i>
  )
});

export default Triangle;
