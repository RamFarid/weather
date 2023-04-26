import { useTimeZone } from '@/pages/_app'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

function SingleDeatiledCard({ data, onClick, i, currentShow, setCurrentShow }) {
  const viewEl = useRef(null)
  const { timeZoneChangerListener } = useTimeZone()
  useEffect(() => {
    const dateFormated = new Date(data.time).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
    const currentDateFormated = new Date().toLocaleTimeString('en-US', {
      timeZone: timeZoneChangerListener,
      hour: '2-digit',
      minute: '2-digit',
    })
    if (
      dateFormated.startsWith(currentDateFormated.slice(0, 2)) &&
      dateFormated.endsWith(currentDateFormated.slice(-2))
    ) {
      viewEl.current.style.scrollMarginLeft = '12px'
      viewEl.current.scrollIntoView({
        block: 'start',
        inline: 'start',
        behavior: 'smooth',
      })
      setCurrentShow(i)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.time])
  if (!data) return
  const dateFormated = new Date(data.time).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
  const currentDateFormated = new Date().toLocaleTimeString('en-US', {
    timeZone: timeZoneChangerListener,
    hour: '2-digit',
    minute: '2-digit',
  })
  return (
    <div
      ref={viewEl}
      className={`weather-info ${
        dateFormated.startsWith(currentDateFormated.slice(0, 2)) &&
        dateFormated.endsWith(currentDateFormated.slice(-2))
          ? 'light-box'
          : null
      }`}
      onClick={() => onClick(i)}
    >
      <div className='left-hdata'>
        <p className='day-info'>{dateFormated}</p>
        <Image
          alt='icon'
          src={`https://${data.condition.icon}`}
          width={100}
          height={100}
        />
        <div className='night-and-day'>{data.temp_c}&#8451;</div>
      </div>
      <div className={i === currentShow ? 'right-hdata' : 'right-hdata close'}>
        <div className='main-details'>
          <div className='left-data'>Tempreture</div>
          <div className='right-data'>{data.temp_c}&#8451;</div>
        </div>
        <div className='main-details'>
          <div className='left-data'>Feels like</div>
          <div className='right-data'>{data.feelslike_c}&#8451;</div>
        </div>
        <div className='main-details'>
          <div className='left-data'>Heat Index</div>
          <div className='right-data'>{data.heatindex_c}&#8451;</div>
        </div>
        <div className='main-details'>
          <div className='left-data'>Pressure</div>
          <div className='right-data'>{data.pressure_mb}hPa</div>
        </div>
        <div className='main-details'>
          <div className='left-data'>Wind speed</div>
          <div className='right-data'>{data.wind_kph}km/h</div>
        </div>
        <div className='main-details'>
          <div className='left-data'>Chance of rain</div>
          <div className='right-data'>{data.chance_of_rain}%</div>
        </div>
        <div className='main-details'>
          <div className='left-data'>Humidity</div>
          <div className='right-data'>{data.humidity}%</div>
        </div>
      </div>
    </div>
  )
}

function formatTimeAsHour(tz, da) {
  const date = new Date(da || null)
  let time
  if (tz) {
    if (tz.includes('/')) {
      time = date.toLocaleTimeString('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
      })
    }
  }
  time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return time
}

export default SingleDeatiledCard
