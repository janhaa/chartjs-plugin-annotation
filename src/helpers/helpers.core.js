export const EPSILON = 0.001;

export const clamp = (x, from, to) => Math.min(to, Math.max(from, x));

export function clampAll(obj, from, to) {
  for (const key of Object.keys(obj)) {
    obj[key] = clamp(obj[key], from, to);
  }
  return obj;
}

export function inPointRange(point, center, radius, borderWidth) {
  if (!point || !center || radius <= 0) {
    return false;
  }
  const hBorderWidth = borderWidth / 2;
  return (Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2)) <= Math.pow(radius + hBorderWidth, 2);
}

export function inBoxRange(point, {x, y, x2, y2}, axis, borderWidth) {
  const hBorderWidth = borderWidth / 2;
  const inRangeX = point.x >= x - hBorderWidth - EPSILON && point.x <= x2 + hBorderWidth + EPSILON;
  const inRangeY = point.y >= y - hBorderWidth - EPSILON && point.y <= y2 + hBorderWidth + EPSILON;
  if (axis === 'x') {
    return inRangeX;
  } else if (axis === 'y') {
    return inRangeY;
  }
  return inRangeX && inRangeY;
}

export function getElementCenterPoint(element, useFinalPosition) {
  const {centerX, centerY} = element.getProps(['centerX', 'centerY'], useFinalPosition);
  return {x: centerX, y: centerY};
}

const isOlderPart = (act, req) => req > act || (act.length > req.length && act.slice(0, req.length) === req);

export function requireVersion(pkg, min, ver, strict = true) {
  const parts = ver.split('.');
  let i = 0;
  for (const req of min.split('.')) {
    const act = parts[i++];
    if (parseInt(req, 10) < parseInt(act, 10)) {
      break;
    }
    if (isOlderPart(act, req)) {
      if (strict) {
        throw new Error(`${pkg} v${ver} is not supported. v${min} or newer is required.`);
      } else {
        return false;
      }
    }
  }
  return true;
}