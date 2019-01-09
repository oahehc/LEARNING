// custom hook
function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(currentCount => currentCount + 1)
  return {count, increment}
}

// apply hook to create a component with render prop
const Counter = ({children, ...props}) => children(useCounter(props))

export default Counter
export {useCounter}