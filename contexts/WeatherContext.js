import useWeather from '@/hooks/WeatherData'
import React, { createContext, useContext } from 'react'

const WeatherContext = createContext()

export const useWeatherData = () => {
  return useContext(WeatherContext)
}

function WeatherProvider({ children }) {
  return (
    <WeatherContext.Provider value={useWeather()}>
      {children}
    </WeatherContext.Provider>
  )
}

export default WeatherProvider
