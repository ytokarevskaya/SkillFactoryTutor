if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      document.querySelector(".geoLocation").innerText = coords.latitude;
    });
  }