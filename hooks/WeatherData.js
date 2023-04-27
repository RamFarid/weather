import initData from '@/utils/initData'
import { useState, useEffect } from 'react'

const INIT_DATA = {
  country: '',
  lon: 0,
  lat: 0,
  currentAside: {},
  dayAside: {
    day: [],
    astro: [],
  },
  hours: [],
}

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(INIT_DATA)
  useEffect(() => {
    ;(async () => {
      const data = await initData()
      console.log(data)
      if (data) {
        setWeatherData(data)
      }
    })()
  }, [])
  return { weatherData, setWeatherData }
}

export default useWeather
