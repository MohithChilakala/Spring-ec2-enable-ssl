function App() {
  const handleApiCall = () => {
    fetch("https://ec2-13-201-101-1.ap-south-1.compute.amazonaws.com:8080").then((res) => {
      res.text().then((data) => alert(data));
    });
  };

  return (
    <button type="submit" onClick={handleApiCall}>Call Api</button>
  );
}

export default App;
