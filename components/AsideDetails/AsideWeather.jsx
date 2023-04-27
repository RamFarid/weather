import React, { useEffect, useState } from 'react'
import CurrentWeatherCard from '@/components/AsideDetails/CurrentWeatherCard'
import DayWeatherCard from '@/components/AsideDetails/DayWeatherCard'
import rightArrow from '@/public/right-arrow.svg'
import Image from 'next/image'
function AsideWeather() {
  const [isClosed, setIsClosed] = useState('close')
  useEffect(() => {
    const responsive670 = window.matchMedia('(max-width: 670px)')
    if (responsive670.matches) {
      setIsClosed('closeH')
    } else {
      setIsClosed('close')
    }
  }, [])
  const toggleAddirtionInfo = () => {
    const responsive670 = window.matchMedia('(max-width: 670px)')
    if (responsive670.matches && isClosed === 'closeH') {
      setIsClosed(null)
    } else if (responsive670.matches && isClosed !== 'closeH') {
      setIsClosed('closeH')
    } else if (!responsive670.matches && isClosed !== 'close') {
      setIsClosed('close')
    } else if (!responsive670.matches && isClosed === 'close') {
      setIsClosed(null)
    }
  }
  return (
    <div className='container'>
      <CurrentWeatherCard />
      <DayWeatherCard close={isClosed} />
      <div
        className={isClosed ? 'btn' : 'btn rotating'}
        onClick={toggleAddirtionInfo}
      >
        <div className='arrow'>
          <Image
            src={rightArrow}
            alt='right-icon'
            width={32}
            height={32}
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default AsideWeather
