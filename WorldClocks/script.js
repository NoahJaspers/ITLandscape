function updateClocks() {
  const cities = {
    amsterdam: "Europe/Amsterdam",
    newyork: "America/New_York",
    tokyo: "Asia/Tokyo",
    sydney: "Australia/Sydney",
    london: "Europe/London",
    dubai: "Asia/Dubai",
  };

  for (const [city, timezone] of Object.entries(cities)) {
    const element = document.getElementById(city);
    const options = {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    const time = new Date().toLocaleTimeString("nl-NL", options);
    element.textContent = time;
  }
}

// Update klokken elke seconde
setInterval(updateClocks, 1000);

// Initial update
updateClocks();
