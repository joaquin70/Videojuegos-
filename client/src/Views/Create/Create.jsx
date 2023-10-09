function Create() {
    const [input, setInput] = useState({
      Name,
      types,
      description,
    });
  
    const types = useSelector();
  
    useEffect(() => {
      getTypes();
    }, []);
    return (
      <div>
        <h1>Create</h1>
      </div>
    );
  }
  
  export default Landing;