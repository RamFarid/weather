import React from 'react'
import SingleAsideData from './SingleAsideData'
import { useWeatherData } from '@/contexts/WeatherContext'

function DayWeatherCard({ close }) {
  const { weatherData } = useWeatherData()
  const data = weatherData?.dayAside
  return (
    <div className={`another-data special ${close}`}>
      <div className='data-add'>On this day</div>
      {Object.keys(data || {}).length !== 0 && (
        <>
          <SingleAsideData condition={data.astro.sunrise} txt={'Sunrise at'} />
          <SingleAsideData condition={data.astro.sunset} txt={'Sunset at'} />
          <SingleAsideData
            txt={'Day temperature'}
            condition={<span dir='ltr'>{data.day.maxtemp_c}&#8451;</span>}
          />
          <SingleAsideData
            txt={'Night temperature'}
            condition={<span dir='ltr'>{data.day.mintemp_c}&#8451;</span>}
          />
          <SingleAsideData
            txt={'Average temperature'}
            condition={<span dir='ltr'>{data.day.avgtemp_c}&#8451;</span>}
          />
          <SingleAsideData
            txt={'Max wind'}
            condition={`${data.day.maxwind_kph}km/h`}
          />
          <SingleAsideData
            txt={'Chance of rain'}
            condition={`${data.day.daily_chance_of_rain}%`}
          />
          <SingleAsideData
            txt={'Average humidity'}
            condition={`${data.day.avghumidity}%`}
          />
          {/* <SingleAsideData
              txt={'Status condition'}
              condition={data.day.condition.text}
            /> */}
        </>
      )}
    </div>
  )
}

export default DayWeatherCard
