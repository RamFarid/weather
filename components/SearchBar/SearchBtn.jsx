import { useAppData, useTimeZone } from '@/pages/_app'
import getCityWeather from '@/utils/getCityWeather'
import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

function SearchBtn({ country }) {
  const { setAppData } = useAppData()
  const { setTimeZoneChangerListener } = useTimeZone()
  const getCountryWeather = async () => {
    const id = toast.loading('Get country details...')
    if (!country) return toast.warning('Empty field')
    console.log('country: ' + country)
    const data = await getCityWeather(country)
    toast.update(id, {
      render: 'Fetched..',
      type: 'info',
      isLoading: false,
      autoClose: 1000,
    })
    if (data) {
      setAppData({
        lon: data.location.lon,
        lat: data.location.lat,
        name: data.location.country,
        currentAside: data.current,
        dayAside: {
          day: data.forecast.forecastday[0].day,
          astro: data.forecast.forecastday[0].astro,
        },
        hours: data.forecast.forecastday[0].hour,
      })
      setTimeZoneChangerListener(data.location.tz_id)
    }
  }
  return (
    <button type='button' htmlFor='country' onClick={getCountryWeather}>
      Get
    </button>
  )
}

export default SearchBtn
