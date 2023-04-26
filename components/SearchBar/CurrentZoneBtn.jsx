import { useAppData, useTimeZone } from '@/pages/_app'
import { initData } from '@/utils/initData'
import React from 'react'

function CurrentZoneBtn() {
  const { setAppData } = useAppData()
  const { setTimeZoneChangerListener } = useTimeZone()
  const handleCurrentZone = async () => {
    const data = await initData()
    console.log(data)
    if (data) {
      setAppData(data)
      setTimeZoneChangerListener(
        Intl.DateTimeFormat().resolvedOptions().timeZone
      )
    }
  }
  return (
    <button type='button' onClick={handleCurrentZone}>
      Current Zone
    </button>
  )
}

export default CurrentZoneBtn
