import { useTimeZoneData } from '@/contexts/TimeZoneContext'
import { useWeatherData } from '@/contexts/WeatherContext'
import getCityWeather from '@/utils/getCityWeather'
import React, { memo } from 'react'
import { toast } from 'react-toastify'

function SearchBtn({ country, setCountry }) {
  const { setWeatherData } = useWeatherData()
  const { setTimeZone } = useTimeZoneData()
  const getCountryWeather = async () => {
    if (!country) return toast.warning('Empty field')
    const id = toast.loading('Get country details...')
    console.log('country: ' + country)
    const data = await getCityWeather(country)
    console.log(data)
    toast.update(id, {
      render: `Fetched ${data.country}`,
      type: 'success',
      isLoading: false,
      autoClose: 3000,
    })
    if (data) {
      setCountry('')
      setWeatherData(data)
      setTimeZone((pre) => ({ ...pre, timeZoneId: data.tz_id }))
    }
  }
  return (
    <button type='button' htmlFor='country' onClick={getCountryWeather}>
      Get Data
    </button>
  )
}

export default memo(SearchBtn)
