import '@/styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { createContext, useContext, useEffect, useState } from 'react'
import getCurrentTime from '@/utils/getCurrentTime'
import { initData } from '@/utils/initData'

const AppData = createContext()
const TimeZone = createContext()

export function useAppData() {
  return useContext(AppData)
}

export function useTimeZone() {
  return useContext(TimeZone)
}

export default function App({ Component, pageProps }) {
  const [timeZoneChangerListener, setTimeZoneChangerListener] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [appData, setAppData] = useState({})
  const [timeZone, setTimeZone] = useState({ time: null, date: null })

  useEffect(() => {
    ;(async () => {
      const data = await initData()
      console.log(data)
      if (data) {
        setAppData(data)
      }
    })()
  }, [])
  useEffect(() => {
    const timerId = setInterval(() => {
      const zone = getCurrentTime(timeZoneChangerListener)
      setTimeZone(zone)
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [timeZoneChangerListener])
  return (
    <AppData.Provider
      value={{
        appData,
        setAppData,
      }}
    >
      <TimeZone.Provider
        value={{
          timeZone,
          timeZoneChangerListener,
          setTimeZoneChangerListener,
        }}
      >
        <Component {...pageProps} />
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </TimeZone.Provider>
    </AppData.Provider>
  )
}
