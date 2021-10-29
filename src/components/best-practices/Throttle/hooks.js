import { useState } from 'react';

function useThrottle(originalCallback) {
  const [isActive, setActive] = useState(false);

  const callback = (...args) => {
    if (isActive) return;

    setActive(true);
    console.log(originalCallback);
    originalCallback(...args)
      .then(() => setActive(false));
  };

  return { isActive, callback };
}

export default useThrottle;
