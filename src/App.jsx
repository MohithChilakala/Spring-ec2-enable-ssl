function App() {
  const handleApiCall = () => {
    fetch("https://ec2-43-204-145-104.ap-south-1.compute.amazonaws.com:8080/")
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert('open backend url manually for client to trust backend');
        window.open(
          "https://ec2-13-201-101-1.ap-south-1.compute.amazonaws.com:8080/"
        );
      });
  };

  return (
    <button type="submit" onClick={handleApiCall}>
      Call Api
    </button>
  );
}

export default App;
