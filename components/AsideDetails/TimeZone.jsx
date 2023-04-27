import React from 'react'
import { useTimeZoneData } from '@/contexts/TimeZoneContext'

function TimeZone() {
  const { timeZone } = useTimeZoneData()
  return (
    <>
      <div className='time'>{timeZone.time}</div>
      <div className='date'>{timeZone.date}</div>
    </>
  )
}

export default TimeZone
