export const ICON_MAP = new Map();

// ICON_MAP.set(0, "sun")
// ICON_MAP.set(1, "sun")
// Can rewrite the above more succinctly below (corresponds to WMO codes at the bottom of this page: https://open-meteo.com/en/docs#latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=America%2FNew_York):

addMapping([0, 1], "sun");
addMapping([2], "cloud-sun");
addMapping([3], "cloud");
addMapping([45, 48], "smog");
addMapping([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], "cloud-showers-heavy");
addMapping([71, 73, 75, 77, 85, 86], "snowflake");
addMapping([95, 96, 99], "cloud-bolt");

function addMapping(values, icon) {
  values.forEach((value) => {
    ICON_MAP.set(value, icon);
  });
}

ICON_MAP.get(0)