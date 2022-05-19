import React, { useEffect } from 'react'

export function useIsMountedRoot() {
  const isMountedRoot = React.useRef(true)

  useEffect(() => {
    return () => {
      isMountedRoot.current = false
    }
  }, [])
  return isMountedRoot
}
