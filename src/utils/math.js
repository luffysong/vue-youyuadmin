function moneyConv(num) { // eslint-disable-line
  return parseInt((Number(num)).toFixed(4).toString().split('.')
  .join(''), 10);
}

// 金额计算 加
export function moneyAdd(a, b) { // eslint-disable-line
  return Number(((moneyConv(a) + moneyConv(b)) / 10000).toFixed(2));
}

// 金额计算 减
export function moneySub(a, b) { // eslint-disable-line
  return Number(((moneyConv(a) - moneyConv(b)) / 10000).toFixed(2));
}

// 金额计算 乘
export function moneyMul(a, b) { // eslint-disable-line
  return Number(((moneyConv(a) * moneyConv(b)) / 100000000).toFixed(2));
}

// 金额计算 除
export function moneyDiv(a, b) { // eslint-disable-line
  return Number((moneyConv(a) / moneyConv(b)).toFixed(2));
}

// 返回百分比
export function toPercent(origin) {
  if (!origin && origin !== 0 && origin !== '0') {
    return '-';
  }
  const val = moneyMul(origin, 100);
  return `${val}%`;
}
