import { useRef, useState, useMemo } from 'react';

function useFunction(fn) {
  const ref = useRef({ current: { result: 1} });
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    console.log('memoized function exeucted');
    return fn(number);
  }, [number]);

  const onChange = () => {
    const { value } = ref.current;
    const newNumber = value === '' || isNaN(value) ? 0 : Number(value);
    setNumber(newNumber);
  };

  return { ref, onChange, number, result };
}

export default useFunction;
