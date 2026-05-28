import { useMapsLibrary } from "@vis.gl/react-google-maps";
import React, { useRef } from "react";

export default function SearchBox({ onPlaceSelect }) {
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  React.useEffect(() => {
    if (!places || !inputRef.current) return;

    const autocomplete =
      new places.Autocomplete(inputRef.current);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;

      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      onPlaceSelect(location);
    });
  }, [places]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Buscar dirección..."
      style={{
        width: "300px",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        fontSize: "16px",
      }}
    />
  );
}
