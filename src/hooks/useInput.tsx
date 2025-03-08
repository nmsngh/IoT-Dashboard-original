import { type ChangeEvent, useCallback, useState } from 'react';

type Props<T> = [
  value: T,
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
  reset: () => void,
];

export default function useInput<T>(initialValue: T): Props<T> {
  const [value, setValue] = useState<T>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    if (e.target) setValue(e.target.value);
    else setValue(e);
  };

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return [value, onChange, reset];
}
