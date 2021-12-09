import {isObject, valueOrDefault} from 'chart.js/helpers';

const isEnabled = (options) => options && (options.display || options.enabled);
const toPercent = (s) => typeof s === 'string' && s.endsWith('%') && parseFloat(s) / 100;

export function getSize(size, value) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return toPercent(value) * size;
  }
  return size;
}

export function isLabelVisible(options) {
  return isEnabled(options) && options.content;
}

export function isPointVisible(options) {
  return isEnabled(options) && options.radius > 0.1;
}

export function calculateTextAlignment(size, options) {
  const {x, width} = size;
  const textAlign = options.textAlign;
  if (textAlign === 'center') {
    return x + width / 2;
  } else if (textAlign === 'end' || textAlign === 'right') {
    return x + width;
  }
  return x;
}

function readValueToProps(value, props, defValue) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value)
    ? objProps
      ? prop => valueOrDefault(value[prop], value[props[prop]])
      : prop => value[prop]
    : () => value;

  for (const prop of keys) {
    ret[prop] = valueOrDefault(read(prop), defValue);
  }
  return ret;
}

export function toPosition(value) {
  return readValueToProps(value, ['x', 'y'], 'center');
}

export function isBoundToPoint(options) {
  return options && (options.xValue || options.yValue);
}