export default async function getCurrentWeather(lon, lat) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8e34841c605548b6aa324553222407&q=${lat},${lon}&days=1&aqi=no&alerts=no`
    )
    if (response.status !== 200) return false
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return false
  }
}
