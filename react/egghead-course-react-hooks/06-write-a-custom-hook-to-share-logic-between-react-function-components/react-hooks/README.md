### custom hook
```
const useBattery = () => { // must prefix by `use`
  const [battery, setBattery] = useState();
  ...
  useEffect(() => {
    ...
  })
}
```