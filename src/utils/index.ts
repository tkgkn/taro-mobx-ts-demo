// 缓存函数
export function memo(fn: Function, target: any) {
  const map = new Map();
  return function memoFn() {
    const key = Array.from(arguments).toString();
    if (map.has(key)) {
      console.log('缓存值:');
      return map.get(key);
    }
    const value = fn.apply(target || this, arguments);
    map.set(key, value);
    return value;
  };
}

// 延迟
export function delay(time: number = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}
