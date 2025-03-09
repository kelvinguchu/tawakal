"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

interface GlobalNetworkMapProps {
  className?: string;
}

// Define markers for the global network - simplified
const markers = [
  {
    coordinates: [45.0, 10.0] as [number, number],
    name: "Somalia",
    markerType: "hub",
  },
  {
    coordinates: [36.8219, -1.2921] as [number, number],
    name: "Kenya",
    markerType: "africa",
  },
  {
    coordinates: [55.2708, 25.2048] as [number, number],
    name: "UAE",
    markerType: "destination",
  },
  {
    coordinates: [-0.1278, 51.5074] as [number, number],
    name: "UK",
    markerType: "destination",
  },
  {
    coordinates: [-95.7129, 37.0902] as [number, number],
    name: "USA",
    markerType: "destination",
  },
];

// Create connection lines from Somalia to other countries - simplified
const connections = markers
  .filter((marker) => marker.markerType !== "hub")
  .map((marker) => ({
    from: markers[0].coordinates as [number, number],
    to: marker.coordinates as [number, number],
    type: marker.markerType,
  }));

const GlobalNetworkMap: React.FC<GlobalNetworkMapProps> = ({
  className = "",
}) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Simplified useEffect - only for loading the map
  useEffect(() => {
    setMapLoaded(true);
    return () => {};
  }, []);

  return (
    <div className={`relative ${className}`} ref={mapContainerRef}>
      <div className='h-[350px] xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] relative bg-gradient-to-b from-[#f9f9f9] to-[#f0f9ff] rounded-xl overflow-hidden'>
        {/* Simplified background - no animations */}
        <div className='absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50'></div>

        {mapLoaded ? (
          <div className='relative z-10 h-full'>
            <ComposableMap
              projection='geoMercator'
              projectionConfig={{
                scale: 195,
                rotate: [-10, 0, 0],
                center: [0, 20],
              }}
              style={{
                width: "100%",
                height: "100%",
              }}>
              {/* Add a subtle ocean background */}
              <rect
                x={-5000}
                y={-5000}
                width={10000}
                height={10000}
                fill='rgba(230, 245, 255, 0.2)'
              />

              <Geographies geography='/world-countries.json'>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    // Define continent colors - simplified
                    const continentColors: Record<string, string> = {
                      Africa: "rgba(47, 180, 87, 0.15)",
                      Asia: "rgba(0, 117, 190, 0.15)",
                      Europe: "rgba(210, 73, 53, 0.12)",
                      "North America": "rgba(245, 158, 11, 0.12)",
                      "South America": "rgba(47, 180, 87, 0.08)",
                      Oceania: "rgba(0, 117, 190, 0.08)",
                      Antarctica: "rgba(200, 200, 200, 0.08)",
                    };

                    const continent =
                      (geo.properties?.continent as string) || "";

                    // Check if country is highlighted
                    const isHighlighted = [
                      "Somalia",
                      "Kenya",
                      "United Arab Emirates",
                      "United Kingdom",
                      "United States of America",
                    ].includes(geo.properties.name);

                    // Determine fill color based on continent and highlight status
                    let fillColor =
                      continentColors[continent] || "rgba(200, 200, 200, 0.15)";
                    if (isHighlighted) {
                      fillColor =
                        continent === "Africa"
                          ? "rgba(47, 180, 87, 0.25)"
                          : "rgba(0, 117, 190, 0.25)";
                    }

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fillColor}
                        stroke={
                          isHighlighted
                            ? "rgba(47, 180, 87, 0.5)"
                            : "rgba(200, 200, 200, 0.5)"
                        }
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Static connection lines - no animations */}
              {connections.map((connection, i) => (
                <Line
                  key={`connection-${i}`}
                  from={connection.from}
                  to={connection.to}
                  stroke={
                    connection.type === "africa"
                      ? "rgba(47, 180, 87, 0.7)"
                      : "rgba(0, 117, 190, 0.7)"
                  }
                  strokeWidth={connection.type === "africa" ? 2 : 1.5}
                  strokeLinecap='round'
                  strokeDasharray={
                    connection.type === "africa" ? "none" : "5,5"
                  }
                />
              ))}

              {/* Static markers - no animations */}
              {markers.map((marker, i) => (
                <Marker key={`marker-${i}`} coordinates={marker.coordinates}>
                  <g transform='translate(-12, -12)'>
                    <circle
                      r={marker.markerType === "hub" ? 8 : 6}
                      cx={12}
                      cy={12}
                      fill={
                        marker.markerType === "hub"
                          ? "#2fb457"
                          : marker.markerType === "africa"
                          ? "#2fb457"
                          : "#0075be"
                      }
                    />
                    {marker.markerType === "hub" && (
                      <circle
                        r={12}
                        cx={12}
                        cy={12}
                        fill='rgba(47, 180, 87, 0.3)'
                      />
                    )}
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        ) : (
          <div className='flex items-center justify-center h-full'>
            <div className='w-8 h-8 sm:w-12 sm:h-12 border-3 sm:border-4 border-tawakal-blue border-t-transparent rounded-full animate-spin'></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalNetworkMap;
