import React from 'react';

export function useIsMounted() {
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

export function useIsDisplay() {
  const isDisplay = React.useRef(true);

  React.useEffect(() => {
    return () => {
      isDisplay.current = false;
    };
  }, []);
  return isDisplay;
}
