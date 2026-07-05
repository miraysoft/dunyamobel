"use client";
// Lightweight hook wrapper that uses the extracted toast manager
import * as React from 'react'
import { subscribe, unsubscribe, getState, toast as showToast, dismiss as dismissToast } from './toastManager'

function useToast() {
  const [state, setState] = React.useState(getState())

  React.useEffect(() => {
    subscribe(setState)
    return () => unsubscribe(setState)
  }, [])

  return {
    ...state,
    toast: showToast,
    dismiss: dismissToast,
  }
}

export { useToast, showToast as toast }
