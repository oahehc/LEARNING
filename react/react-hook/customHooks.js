// prevent setState after component unMount
function useSafeSetState(initialState) {
  const [state, setState] = useSetState(initialState)

  const mountedRef = useRef(false)
  useEffect(() => {
    mountedRef.current = true
    return () => (mountedRef.current = false)
  }, [])
  const safeSetState = (...args) => mountedRef.current && setState(...args)

  return [state, safeSetState]
}

// tracking previous state
function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

function useDeepCompareEffect(callback, inputs) {
  const cleanupRef = useRef()
  useEffect(() => {
    if (!isEqual(previousInputs, inputs)) {
      cleanupRef.current = callback()
    }
    return cleanupRef.current
  })
  const previousInputs = usePrevious(inputs)
}