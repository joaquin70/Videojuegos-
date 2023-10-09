function Detail() {
    useEffect(() => {
      return () => {
        clearState();
      };
    });
    return (
      <div>
        <h1>Detail</h1>
      </div>
    );
  }
  
  export default Detail;