// Acest cod este punctul de intrare al unei aplicații React.
// Dependențe de import:

// React este importat din pachetul „react” pentru a defini și a crea componente React.
// ReactDOM este importat din pachetul „react-dom” pentru a reda componentele React în DOM.
// „mapbox-gl/dist/mapbox-gl.css” este importat pentru a include stilurile CSS Mapbox GL.
// „./index.css” este importat pentru a include stiluri personalizate specifice acestei aplicații.
// Aplicația este importată din fișierul „./App”, care este componenta principală a aplicației.

import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import App from './App';

// Redarea aplicației:

// ReactDOM.render() este apelat pentru a reda aplicația React.
// Componenta rădăcină a aplicației este încapsulată în <React.StrictMode>, care este o caracteristică a modului de dezvoltare care efectuează verificări și avertismente suplimentare pentru a ajuta la identificarea problemelor potențiale.
// Componenta rădăcină este <App />, care este componenta principală a aplicației definită în fișierul „./App”.
// Ieșirea redată va fi inserată în elementul DOM cu ID-ul „rădăcină”, așa cum este specificat de document.getElementById(„rădăcină”).
// Scopul acestui cod este de a reda componenta <App />, care reprezintă întreaga aplicație React, în elementul DOM cu ID-ul „rădăcină”. Modul strict este activat pentru a efectua verificări suplimentare în timpul dezvoltării, iar foile de stil necesare sunt importate pentru Mapbox GL și stilul personalizat.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




