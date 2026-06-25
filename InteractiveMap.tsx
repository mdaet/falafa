"use client";

import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { locationTimeline, siteConfig } from "@/lib/data";

type InteractiveMapProps = {
  active: string | null;
  selected: string | null;
  onActiveChange: (name: string | null) => void;
  onSelect: (name: string) => void;
};

const GITE_LATLNG: [number, number] = [
  siteConfig.geo.latitude,
  siteConfig.geo.longitude,
];

/** Pilote la carte : recadre tout au montage, vole vers la ville sélectionnée. */
function MapController({
  selected,
  markerRefs,
}: {
  selected: string | null;
  markerRefs: React.MutableRefObject<Record<string, L.Marker>>;
}) {
  const map = useMap();

  // Leaflet mesure mal sa taille dans un conteneur sticky : on force le recalcul.
  useEffect(() => {
    const t = setTimeout(() => map.invalidateSize(), 60);
    return () => clearTimeout(t);
  }, [map]);

  useEffect(() => {
    if (!selected) return;
    const marker = markerRefs.current[selected];
    if (!marker) return;
    map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 12), {
      duration: 0.8,
    });
    // Ouvrir le popup une fois l'animation terminée, sinon flyTo le referme.
    const open = () => marker.openPopup();
    map.once("moveend", open);
    return () => {
      map.off("moveend", open);
    };
  }, [selected, map, markerRefs]);

  return null;
}

export default function InteractiveMap({
  active,
  selected,
  onActiveChange,
  onSelect,
}: InteractiveMapProps) {
  const markerRefs = useRef<Record<string, L.Marker>>({});

  const bounds = useMemo(
    () =>
      L.latLngBounds([
        GITE_LATLNG,
        ...locationTimeline
          .filter((s) => s.inFrame !== false)
          .map((s) => [s.geo.lat, s.geo.lng] as [number, number]),
      ]),
    []
  );

  const giteIcon = useMemo(
    () =>
      L.divIcon({
        className: "gite-marker",
        html: `<span style="display:flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:9999px;background:#b5673a;border:3px solid #ffffff;box-shadow:0 3px 8px rgba(0,0,0,.35)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/></svg></span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18],
        tooltipAnchor: [0, -16],
      }),
    []
  );

  const cityIcon = useMemo(
    () =>
      L.divIcon({
        className: "city-marker",
        html: `<span style="display:block;width:14px;height:14px;border-radius:9999px;background:#b5673a;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></span>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
        popupAnchor: [0, -8],
        tooltipAnchor: [0, -8],
      }),
    []
  );

  const cityIconActive = useMemo(
    () =>
      L.divIcon({
        className: "city-marker city-marker--active",
        html: `<span style="display:block;width:18px;height:18px;border-radius:9999px;background:#964f2c;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35);outline:5px solid rgba(181,103,58,.3)"></span>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -10],
        tooltipAnchor: [0, -10],
      }),
    []
  );

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [50, 50] }}
      scrollWheelZoom
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <MapController selected={selected} markerRefs={markerRefs} />

      {/* Le gîte */}
      <Marker position={GITE_LATLNG} icon={giteIcon} zIndexOffset={1100}>
        <Tooltip permanent direction="top" className="map-tip map-tip--gite">
          Le gîte
        </Tooltip>
        <Popup>
          <strong>{siteConfig.name}</strong>
          <br />
          {siteConfig.address.street}
          <br />
          {siteConfig.address.postalCode} {siteConfig.address.locality}
        </Popup>
      </Marker>

      {/* Villes citées */}
      {locationTimeline.map((stop) => {
        const isActive = active === stop.name;
        return (
          <Marker
            key={stop.name}
            position={[stop.geo.lat, stop.geo.lng]}
            icon={isActive ? cityIconActive : cityIcon}
            zIndexOffset={isActive ? 1000 : 0}
            ref={(m) => {
              if (m) markerRefs.current[stop.name] = m;
            }}
            eventHandlers={{
              mouseover: () => onActiveChange(stop.name),
              mouseout: () => onActiveChange(null),
              click: () => onSelect(stop.name),
            }}
          >
            <Tooltip direction="top" className="map-tip">
              {stop.name} · {stop.distance}
            </Tooltip>
            <Popup>
              <strong>{stop.name}</strong> — {stop.distance}
              <br />
              {stop.description}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
