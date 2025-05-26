/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat. De coördinaten van AP zijn: 51.23009 en 4.41616.
Gebruik hiervoor de documentatie op https://leafletjs.com/ 
*/

let map = L.map('HomeMap').setView([51.185919, 4.382111], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.186, 4.382122], [51.186, 4.382122]];

// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, { color: "#e60005", weight: 1 }).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.185919, 4.382111]).addTo(map);
apMarker.bindPopup("<b>Yasin-Mrani</b><br>Turnersstraat 38").openPopup();