import useTimeZone from '@/hooks/TimeZone'
import React, { createContext, useContext } from 'react'

const TimeZoneContext = createContext()

export const useTimeZoneData = () => {
  return useContext(TimeZoneContext)
}

function TimeZoneProvider({ children }) {
  return (
    <TimeZoneContext.Provider value={useTimeZone()}>
      {children}
    </TimeZoneContext.Provider>
  )
}

export default TimeZoneProvider
