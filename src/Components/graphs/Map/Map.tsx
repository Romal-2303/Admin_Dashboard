import React from "react";
import classes from "./Map.module.scss";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "../../../DesignSystem/_classes.module.scss";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Map = () => {
  let circleArr = [
    {
      id: 1,
      city: "Nagpur",
      lat: 21.194179,
      lng: 79.145857,
      radius: 10,
    },
    {
      id: 2,
      city: "Mumbai",
      lat: 19.098243,
      lng: 72.876657,
      radius: 40,
    },
    {
      id: 3,
      city: "Kolkata",
      lat: 22.582598,
      lng: 88.358665,
      radius: 20,
    },
    {
      id: 4,
      city: "Hyderabad",
      lat: 17.409629,
      lng: 78.469302,
      radius: 37,
    },
    {
      id: 5,
      city: "Bengaluru",
      lat: 12.963404,
      lng: 77.599701,
      radius: 45,
    },
    {
      id: 6,
      city: "Pune",
      lat: 18.521365,
      lng: 73.855689,
      radius: 23,
    },
    {
      id: 7,
      city: "Chennai",
      lat: 13.099021,
      lng: 80.200652,
      radius: 33,
    },
    {
      id: 7,
      city: "Raipur",
      lat: 21.262541,
      lng: 81.632344,
      radius: 13,
    },
    {
      id: 8,
      city: "Raipur",
      lat: 23.26439,
      lng: 77.41408,
      radius: 27,
    },
  ];

  return (
    <div
      id="map"
      className={`${classes["map-text-container"]} ${styles["column-span-2"]} ${styles["card"]}`}
    >
      <div className={`${classes["map-header"]} ${styles["chart-header"]}`}>
        Demand by location
      </div>
      <MapContainer
        center={[17.409629, 78.469302]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "450px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {circleArr.map((circle) => (
          <CircleMarker
            center={{ lat: circle.lat, lng: circle.lng }}
            fillOpacity={0.5}
            //  fillColor: colorThis
            // color:colorThis
            //border: colorThis

            pathOptions={{
              color: "red",
              fillColor: "red",
              border: "red",
            }}
            radius={circle.radius}
          >
            <Popup></Popup>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
