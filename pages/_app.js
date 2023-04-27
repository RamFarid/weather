import '@/styles/index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import TimeZoneProvider from '@/contexts/TimeZoneContext'
import WeatherProvider from '@/contexts/WeatherContext'

export default function App({ Component, pageProps }) {
  return (
    <WeatherProvider>
      <TimeZoneProvider>
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
      </TimeZoneProvider>
    </WeatherProvider>
  )
}
