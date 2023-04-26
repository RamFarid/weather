import React from 'react'
import AsideWeather from './AsideWeather'
import { useAppData, useTimeZone } from '@/pages/_app'

function AsideDetails() {
  const { appData } = useAppData()
  const { timeZone, timeZoneChangerListener } = useTimeZone()
  return (
    appData &&
    timeZone && (
      <div className='aside'>
        <div className=''>
          <div className='aside-right'>
            <div className='region'>{appData.country}</div>
            <div className='country'>{timeZoneChangerListener}</div>
            <div className='coords'>
              {appData?.lon},{appData?.lat}
            </div>
          </div>
          <div className='time'>{timeZone.time}</div>
          <div className='date'>{timeZone.date}</div>
        </div>
        <AsideWeather />
      </div>
    )
  )
}

export default AsideDetails
