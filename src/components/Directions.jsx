import React, { useEffect, useState } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";

export default function Directions({ setRoute }) {
  const [origin] = useState("27 Front St E Toronto");
  const [destination] = useState("75 Yonge Street Toronto");

  useEffect(() => {
    fetchDirections(origin, destination, setRoute);
  }, [origin, destination]);

  return (
    <div className="directions">
      <h2>Directions</h2>
      <h3>Origin</h3>
      <p>{origin}</p>
      <h3>Destination</h3>
      <p>{destination}</p>
    </div>
  );
}

async function fetchDirections(origin, destination, setRoute) {
  const [originResults, destinationResults] = await Promise.all([
    getGeocode({ address: origin }),
    getGeocode({ address: destination }),
  ]);

  const [originLocation, destinationLocation] = await Promise.all([
    getLatLng(originResults[0]),
    getLatLng(destinationResults[0]),
  ]);

  const service = new google.maps.DirectionsService();
  service.route(
    {
      origin: originLocation,
      destination: destinationLocation,
      travelMode: google.maps.TravelMode.WALKING,
    },
    (result, status) => {
      
    }
  );
}
