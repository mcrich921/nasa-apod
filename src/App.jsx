import Footer from "./components/Footer";
import Main from "./components/Main";
import InfoBar from "./components/InfoBar";
import { useState, useEffect } from "react";

function App() {
  const [showInfo, setshowInfo] = useState(false);
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleToggleInfo() {
    setshowInfo(!showInfo);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;
      // Get from cache if already there
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Data from cache");
        return;
      }
      // Otherwise reset cache and call API and cache it
      localStorage.clear();
      try {
        const res = await fetch(url);
        const api_data = await res.json();
        localStorage.setItem(localKey, JSON.stringify(api_data));
        setData(api_data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loading">
          <i className="fa-solid fa-spinner fa-spin-pulse"></i>
          <h1>Loading</h1>
        </div>
      )}
      {showInfo && <InfoBar handleToggleInfo={handleToggleInfo} data={data} />}
      {data && (
        <Footer
          handleToggleInfo={handleToggleInfo}
          data={data}
          showInfo={showInfo}
        />
      )}
    </>
  );
}

export default App;
