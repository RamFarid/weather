import React, { useState } from 'react'
import SingleDeatiledCard from './SingleDeatiledCard'
import { useAppData } from '@/pages/_app'

function DetailedWeather() {
  const [openOn, setOpenOn] = useState(null)
  const { appData } = useAppData()
  const data = appData?.hours
  const handleHoursDetails = (i) => {
    if (i === openOn) return setOpenOn(null)
    setOpenOn(i)
  }
  return (
    <div className='main-weather'>
      {data &&
        data.map((day, i) => {
          return (
            <SingleDeatiledCard
              key={`${day.time_epoch}1`}
              data={day}
              onClick={handleHoursDetails}
              i={i}
              currentShow={openOn}
              setCurrentShow={setOpenOn}
            />
          )
        })}
    </div>
  )
}

export default DetailedWeather
