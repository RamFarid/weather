export default function getCurrentTime(tz) {
  const dateConstructor = new Date()
  const time = dateConstructor.toLocaleTimeString('en-US', {
    timeZone: tz,
    timeStyle: 'medium',
  })
  const date = dateConstructor.toLocaleDateString('en-US', {
    timeZone: tz,
  })
  return {
    time,
    date,
  }
}
