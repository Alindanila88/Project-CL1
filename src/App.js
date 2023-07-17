// Acest cod este o componentă React care redă o hartă folosind biblioteca Mapbox GL JS.
// 1). IMPORTS: 
// - React este importat din pachetul „react” pentru a defini și a crea componente React.
// - useRef, useEffect și useState sunt importate din pachetul „react” pentru a gestiona starea componentei și a interacționa cu ciclul de viață al componentei React.
// - mapboxgl este importat din pachetul „mapbox-gl” pentru a utiliza biblioteca Mapbox GL JS.

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// 2). Setarea token-ului de acces Mapbox: (API)
// - Indicatorul de acces Mapbox este setat folosind mapboxgl.accessToken cu un simbol de acces valid. 
// - Acest simbol este necesar pentru a accesa serviciile Mapbox.

mapboxgl.accessToken = 'pk.eyJ1IjoiY3BhdHJhc2N1MTAwOCIsImEiOiJjbGpobGNzNHEwNXk4M2dwNXA3eWhkczQwIn0.VCnxaAheW3fgJIgfaV555w';

// 3). Definirea componentei aplicației:
// - Componenta App este definită ca o componentă funcțională.
// - În interiorul componentei, mapContainer, map, lng, lat și zoom sunt declarate folosind cârligele useRef și useState pentru a păstra referințe la elementul container al hărții, instanța hărții și starea pentru longitudine, latitudine și, respectiv, nivelul de zoom.

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

// 4). useEffect pentru inițializarea hărții:

// - Primul cârlig useEffect este folosit pentru a inițializa harta.
// - Când componenta se montează, efectul rulează și verifică dacă există referința la hartă. Dacă se întâmplă, înseamnă că harta a fost deja inițializată și efectul revine mai devreme.
// - Dacă referința hărții nu este setată, o nouă instanță a hărții Mapbox este creată și atribuită referinței map.current utilizând new mapboxgl.Map().
// - Harta este configurată cu opțiunile furnizate: container (setat la referința mapContainer.current), stil, centru (folosind valorile inițiale lng și lat) și zoom.
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

// 5). useEffect pentru actualizarea stării:

// - Al doilea cârlig useEffect este folosit pentru a actualiza starea (lng, lat, zoom) ori de câte ori harta se mișcă.
// - Verifică dacă există referința la hartă. Dacă nu, înseamnă că harta nu a fost încă inițializată, așa că efectul revine mai devreme.
// - Când harta se mișcă (evenimentul „mutare”), se declanșează apelul de ascultător al evenimentului.
// - În interiorul apelului invers, stările lng, lat și zoom sunt actualizate folosind metodele de instanță map.current (getCenter() și getZoom()).  
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // 6). Redarea componentei:

// - Componenta returnează JSX pentru a reda harta și pentru a afișa coordonatele curente și nivelul de zoom.
// - Longitudinea, latitudinea și nivelul de zoom sunt afișate într-un <div> cu numele clasei „bară laterală”.
// - Containerul hărții este redat folosind un <div> cu numele de clasă „map-container” și un atribut ref setat la referința mapContainer.
  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

// În general, această componentă inițializează o hartă Mapbox și urmărește starea acesteia (lng, lat, zoom) pentru a actualiza interfața cu utilizatorul atunci când harta se mișcă. Componenta redă o bară laterală care afișează coordonatele curente și nivelul de zoom, împreună cu un element container al hărții în care va fi afișată harta.

