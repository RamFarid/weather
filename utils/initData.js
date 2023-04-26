import getCurrentWeather from './getCurrentWeather'
import getGeolocations from './getGeolocations'

export async function initData() {
  try {
    const geolocations = await getGeolocations()
    const weatherData = await getCurrentWeather(
      geolocations.location.longitude,
      geolocations.location.latitude
    )

    if (geolocations && weatherData)
      return {
        country: geolocations.location.country.name,
        lon: geolocations.location.longitude,
        lat: geolocations.location.latitude,
        currentAside: weatherData.current,
        dayAside: {
          day: weatherData.forecast.forecastday[0].day,
          astro: weatherData.forecast.forecastday[0].astro,
        },
        hours: weatherData.forecast.forecastday[0].hour,
      }
    console.log(geolocations && weatherData)
  } catch (error) {
    return false
  }
}
