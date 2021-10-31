function slowFibo(n) {
  if (n < 2) return 1;
  return slowFibo(n - 1) + slowFibo(n - 2);
}

function fastFibo(n) {
  const go = (n, a, b) => {
    if (n === 0) return a;
    if (n === 1) return b;
    return go(n - 1, b , a + b);
  };

  return go(n, 1, 1);
}

export {
  fastFibo,
  slowFibo,
};
