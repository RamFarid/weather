import React from 'react'
import SingleAsideData from './SingleAsideData'
import Image from 'next/image'
import { useWeatherData } from '@/contexts/WeatherContext'

function CurrentWeatherCard() {
  const { weatherData } = useWeatherData()
  const data = weatherData?.currentAside
  return (
    <div className='another-data'>
      <div className='data-add'>Now</div>
      {Object.keys(data || {}).length && (
        <>
          <SingleAsideData
            txt={'Tempreture'}
            condition={<span dir='ltr'>{data.temp_c}&#8451;</span>}
          />
          <SingleAsideData
            txt={'Feels like'}
            condition={<span dir='ltr'>{data.feelslike_c}&#8451;</span>}
          />
          <SingleAsideData txt={'Status'} condition={data.condition.text} />
          <SingleAsideData txt={'Humidity'} condition={`${data.humidity}%`} />
          <SingleAsideData
            txt={'Wind speed'}
            condition={`${data.humidity}km/h`}
          />
          <SingleAsideData
            txt={'Pressure'}
            condition={`${data.pressure_mb}hPa`}
          />
          <div className='c-img'>
            <Image
              src={`https:${data.condition.icon}`}
              className='data-details'
              alt='Weather Condition'
              width={81}
              height={81}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default CurrentWeatherCard
