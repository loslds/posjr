import React, { useEffect } from 'react';

export function useIsValueForcaPassword() {
  const isValuePassWord = React.useRef(true);

  useEffect(() => {
    return () => {
      isValuePassWord.current = false;
    };
  }, []);
  return isValuePassWord;
}

export function useIsMounted() {
  const isMounted = React.useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
}

export function useIsStado() {
  const isStado = React.useRef(false);

  useEffect(() => {
    return () => {
      isStado.current = true;
    };
  }, []);
  return isStado;
}
export function useIsDisplay() {
  const isDisplay = React.useRef(true);
  useEffect(() => {
    return () => {
      isDisplay.current = false;
    };
  }, []);
  return isDisplay;
}
