import React, { useCallback, useMemo, useState } from 'react'
import SingleDeatiledCard from './SingleDeatiledCard'
import { useWeatherData } from '@/contexts/WeatherContext'

function DetailedWeather() {
  const [openOn, setOpenOn] = useState(null)
  const { weatherData } = useWeatherData()
  const data = weatherData?.hours // useMemo(() => weatherData?.hours, [weatherData.hours])
  const handleHoursDetails = useCallback(
    (i) => {
      if (i === openOn) return setOpenOn(null)
      setOpenOn(i)
    },
    [openOn]
  )
  return (
    <div className='main-weather'>
      {data &&
        data.map((day, i) => {
          return (
            <SingleDeatiledCard
              key={`${day.time_epoch}`}
              data={day}
              onClick={handleHoursDetails}
              i={i}
              currentShow={openOn}
              setCurrentShow={setOpenOn}
            />
          )
        })}
    </div>
  )
}

export default DetailedWeather
