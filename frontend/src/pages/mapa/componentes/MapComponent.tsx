import { useEffect, useRef, useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    useMap,
    useMapsLibrary,
} from "@vis.gl/react-google-maps";
import type { Marcador } from "../../../ts/interfaces";
import { getMarcadores } from "../../../ts/restClient";

function PlaceAutocomplete({ onSelect }) {
    const containerRef = useRef(null);
    const places = useMapsLibrary("places");



    useEffect(() => {
        if (!places || !containerRef.current) return;

        // NUEVA API
        const autocomplete = new google.maps.places.PlaceAutocompleteElement();

        autocomplete.id = "place-autocomplete-input";

        containerRef.current.appendChild(autocomplete);

        autocomplete.addEventListener(
            "gmp-placeselect",
            async ({ placePrediction }) => {
                const place = placePrediction.toPlace();

                await place.fetchFields({
                    fields: ["location", "displayName"],
                });

                if (!place.location) return;

                onSelect({
                    lat: place.location.lat(),
                    lng: place.location.lng(),
                    name: place.displayName,
                });
            }
        );

        return () => {
            if (containerRef && containerRef.current) {
                containerRef.current.innerHTML = "";
            };
        };
    }, [places]);

    return <div ref={containerRef} />;
}

function MapController({ center }) {
    const map = useMap();

    useEffect(() => {
        if (!map || !center) return;

        map.panTo(center);
        map.setZoom(14);
    }, [map, center]);

    return null;
}

export default function MapComponent() {
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [locations, setLocations] = useState<Marcador[]>([]);

    useEffect(() => {
        // Consultamos marcadores
        getMarcadores().then(
            (data) => {
                setLocations(data)
                console.log("Marcadores cargados:", data);
            }
        )
    }, []);

    // AIzaSyDechEH4g9wJaJ0_L6IrLB0b6NiaYSHt_U
    return (
        <APIProvider
            apiKey="AIzaSyDechEH4g9wJaJ0_L6IrLB0b6NiaYSHt_U"
            libraries={["places"]}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "600px",
                }}
            >
                {/* buscador flotante */}
                <div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        zIndex: 10,
                        background: "white",
                        padding: 8,
                        borderRadius: 8,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                    }}
                >
                    <PlaceAutocomplete
                        onSelect={setSelectedPlace}
                    />
                </div>

                {/* mapa */}
                <Map
                    defaultCenter={{
                        lat: 40.4168,
                        lng: -3.7038,
                    }}
                    style={{ width: '60vw', height: '50vh' }}
                    defaultZoom={13}
                    mapId="YOUR_MAP_ID"
                >
                    <MapController center={selectedPlace} />

                    {/* marcador búsqueda */}
                    {selectedPlace && (
                        <AdvancedMarker position={selectedPlace}>
                            <Pin
                                background="#4285F4"
                                glyphColor="white"
                            />
                        </AdvancedMarker>
                    )}

                    {/* marcadores */}
                    {locations.map((location) => (
                        <AdvancedMarker
                            key={location.id}
                            position={location.position}
                            title={location.name}
                        >
                            <Pin />
                        </AdvancedMarker>
                    ))}
                </Map>
            </div>
        </APIProvider>
    );
}