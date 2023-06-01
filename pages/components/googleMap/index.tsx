import React from "react";
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  const location = {
    address: "64 Vo Thi Sau street, Tan Dinh district",
    lat: 37.42216,
    lng: -122.08427,
  };
  return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY }}
        defaultCenter={location}
        defaultZoom={8}
      ></GoogleMapReact>
  );
};

export default GoogleMap;
