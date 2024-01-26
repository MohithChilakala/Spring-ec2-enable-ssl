function App() {
  const handleApiCall = () => {
    try {
      fetch("https://ec2-13-201-101-1.ap-south-1.compute.amazonaws.com:8080").then((res) => {
      res.text().then((data) => alert(data));
    });
    } catch(e) {
      alert("Open backend url manually for client to trust backend");
      window.open("https://ec2-13-201-101-1.ap-south-1.compute.amazonaws.com:8080/");
    }
  };

  return (
    <button type="submit" onClick={handleApiCall}>Call Api</button>
  );
}

export default App;
