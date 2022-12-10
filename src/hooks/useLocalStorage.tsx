import { useState, useCallback } from 'react';

import { useOnceCall } from './useOnceCall';

const storage = localStorage;

type StorageObject = Record<string, any> | Record<string, any>[];
type FuncCallback<G = unknown> = (val?: G) => G;

export function useAsyncLocalStorage<T = StorageObject>(key: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T | undefined>(initialValue || undefined);

  const setValue = useCallback(
    async (value?: T | FuncCallback<T>) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        await storage.setItem(key, JSON.stringify(valueToStore));
        return true;
      } catch (_error) {
        return false;
      }
    },
    [key, storedValue]
  );

  const getValue = useCallback(async () => {
    try {
      const item = await storage.getItem(key);
      const result = item ? JSON.parse(item) : initialValue;
      setStoredValue(result || initialValue);
      return result || initialValue;
    } catch (_error) {
      return initialValue;
    }
  }, [key, initialValue]);

  useOnceCall(getValue);

  return [storedValue, setValue] as const;
}

export function useLocalStorage<T = StorageObject>(key: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (_error) {
      return initialValue;
    }
  });

  const setValue = (value: T | FuncCallback<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (_error) {}
  };

  return [storedValue, setValue] as const;
}
