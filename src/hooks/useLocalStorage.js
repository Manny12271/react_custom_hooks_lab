import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // If item exists in localStorage, return it as-is (string)
      // Otherwise, use initialValue
      return item !== null ? item : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      // Only stringify if it is an object (not null)
      if (storedValue !== null && typeof storedValue === "object") {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      } else {
        // Strings, numbers, booleans → store directly
        window.localStorage.setItem(key, storedValue);
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
