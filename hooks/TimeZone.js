import getCurrentTime from '@/utils/getCurrentTime'
import { useEffect, useState } from 'react'

const useTimeZone = () => {
  const [timeZone, setTimeZone] = useState({
    time: null,
    date: null,
    timeZoneId: null,
  })
  useEffect(() => {
    if (!timeZone.timeZoneId)
      setTimeZone((pre) => ({
        ...pre,
        timeZoneId: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }))
    const timerId = setInterval(() => {
      const zone = getCurrentTime(timeZone.timeZoneId)
      setTimeZone((pre) => ({ ...pre, ...zone }))
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [timeZone.timeZoneId])

  return { timeZone, setTimeZone }
}

export default useTimeZone
