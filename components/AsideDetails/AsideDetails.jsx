import React from 'react'
import AsideWeather from './AsideWeather'
import { useWeatherData } from '@/contexts/WeatherContext'
import TimeZone from './TimeZone'

function AsideDetails() {
  const { weatherData } = useWeatherData()
  return (
    Object.keys(weatherData || {}).length && (
      <div className='aside'>
        <TimeZone />
        <div>
          <div className='aside-right'>
            <div className='region'>{weatherData.country}</div>
            <div className='country'>{weatherData.tz_id}</div>
            <div className='coords'>
              {weatherData?.lon},{weatherData?.lat}
            </div>
          </div>
        </div>
        <AsideWeather />
      </div>
    )
  )
}

export default AsideDetails
