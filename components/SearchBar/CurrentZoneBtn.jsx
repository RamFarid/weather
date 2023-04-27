import { useTimeZoneData } from '@/contexts/TimeZoneContext'
import { useWeatherData } from '@/contexts/WeatherContext'
import initData from '@/utils/initData'
import React from 'react'

function CurrentZoneBtn({ setCountry }) {
  const { setWeatherData } = useWeatherData()
  const { setTimeZone } = useTimeZoneData()
  const handleCurrentZone = async () => {
    const data = await initData()
    console.log(data)
    if (data) {
      setCountry('')
      setWeatherData(data)
      setTimeZone((pre) => ({
        ...pre,
        timeZoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }))
    }
  }
  return (
    <button type='button' onClick={handleCurrentZone}>
      Current Zone
    </button>
  )
}

export default CurrentZoneBtn
