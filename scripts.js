/* ---------------------------Show/Hide Menu--------------------------- */

const navMenu = document.getElementById("menu");
const navChange = document.getElementById("menu-hamb");
const maps = document.getElementById("map");

if (navChange) {
  navChange.addEventListener("click", () => {
    // Hide Menu
    if (navMenu.classList.contains("show")) {
      // Menu Off
      navMenu.classList.remove("show");
    } else {
      // Menu On
      navMenu.classList.add("show");
    }

    // Hide Leaflet Maps
    if (maps.classList.contains("mapshow")) {
      // Menu Off
      maps.classList.remove("mapshow");
    } else {
      // Menu On
      maps.classList.add("mapshow");
    }
  });
}
