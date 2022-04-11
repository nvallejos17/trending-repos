import { useState, useEffect, useRef } from 'react'

const defaultOptions = {
  serialize: JSON.stringify,
  deserialize: JSON.parse,
}

export const useLocalStorageState = (
  key: string,
  defaultValue: any = '',
  { serialize, deserialize } = defaultOptions
) => {
  // NOTE: Calling useState with a function (lazy initialization) avoids performance bottlenecks. This is because that function is called only the first time the component is rendered (on mount). There is no need to always do this, but in this case, accessing localStorage could be expensive
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)

    return valueInLocalStorage
      ? deserialize(valueInLocalStorage)
      : typeof defaultValue === 'function'
      ? defaultValue()
      : defaultValue
  })

  // NOTE: Create a reference of the current key
  const prevKeyRef = useRef(key)

  // NOTE: Is very important to add the dependecy array, because we only want to write in localStorage everytime the state changes. If we don't add this dependency, the side effect will happen on every re-render of the component. For example, when a parent component gets re-rendered.
  useEffect(() => {
    // Check if the key name has changed, so we can remove unwanted key/value pairs from localStorage
    if (prevKeyRef.current !== key) {
      window.localStorage.removeItem(prevKeyRef.current)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, serialize, state])

  return [state, setState]
}

export default useLocalStorageState
