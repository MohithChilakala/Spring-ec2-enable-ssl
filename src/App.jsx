function App() {
  const handleApiCall = () => {
    const end_point = "https://ec2-43-204-145-104.ap-south-1.compute.amazonaws.com:8080/";
    
    fetch(end_point)
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        alert(data);
      })
      .catch((error) => {
        alert('open backend url manually for client to trust backend');
        window.open(end_point);
      });
  };

  return (
    <button type="submit" onClick={handleApiCall}>
      Call Api
    </button>
  );
}

export default App;
