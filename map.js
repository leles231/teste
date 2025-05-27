
function initMap() {
  const ufsc = { lat: -27.6000, lng: -48.5000 };
  const map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 15,
    center: ufsc
  });
}
window.initMap = initMap;
