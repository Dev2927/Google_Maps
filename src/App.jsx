import React, { useState } from "react";
import "./App.css";
import MapComponent from "./components/Map";
import Directions from "./components/Directions";

function App() {
  const [route, setRoute] = useState()
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 43.66293,
    lng: -79.39314,
  });
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapComponent selectedLocation={selectedLocation} />
      <Directions setRoute={setRoute}/>
    </div>
  );
}

export default App;
