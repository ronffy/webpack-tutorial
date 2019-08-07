
import isObject from './isObject';

const isFunction = (value: any): value is Function => {
  if (!isObject(value)) {
    return false;
  }

  const tag = Object.prototype.toString.call(value);
  return (
    tag === '[object Function]'
    || tag === '[object AsyncFunction]'
    || tag === '[object GeneratorFunction]'
    || tag === '[object Proxy]'
  )
}

export default isFunction;
