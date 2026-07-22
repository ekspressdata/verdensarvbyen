// Funksjon for å sjekke om enheten er en mobilenhet
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Hvis mobilenhet: legg til lokasjonspunkt
if (isMobileDevice()) {
  // Fiks for 100vh som ikke virker bra på mobile enheter
  setHeight = function () {
    $("div#mapid").css("height", $(window).height());
  };
  setHeight(); // Kjør en gang etter sidelasting

  var previousOrientation = window.orientation;
  var checkOrientation = function () {
    if (window.orientation !== previousOrientation) {
      previousOrientation = window.orientation;
      setHeight();
    }
  };

  window.addEventListener("resize", setHeight, false);
  window.addEventListener("orientationchange", checkOrientation, false);
  //////////////////////////////////////////////////////

  var current_position, current_accuracy;

  function onLocationFound(e) {
    // Fjern eksisterende lokasjonspunkt før oppdatering
    if (current_accuracy) {
      verdensarvkart.removeLayer(current_accuracy);
    }
    // Lokasjonsradius for øyeblikket satt til fast størrelse
    var radius = 2;
    // Legg til lokasjonspunkt
    if (current_position) {
      map.removeLayer(current_position);
    }
    current_position = L.circle(e.latlng, radius).addTo(verdensarvkart);
  }

  // Hvis feil i lokalisering
  function onLocationError(e) {}

  // Oppdater
  verdensarvkart.on("locationfound", onLocationFound);
  verdensarvkart.on("locationerror", onLocationError);

  function locate() {
    verdensarvkart.locate({
      setView: true,
      maxZoom: 2,
      minZoom: 20,
      timeout: 5000,
      enableHighAccuracy: true,
    });
  }

  // Oppdateringsinterval
  setInterval(locate, 750);
}
// Velkomstvinduet vises ikke lenger automatisk ved lasting.
// Det åpnes nå fra info-knappen (i) i toppmenyen via visVelkommen() i index.html.
