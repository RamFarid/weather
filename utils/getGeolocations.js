export default async function getGeolocations() {
  // if (!console.log(process.env.IP_KEY)) {
  //   throw new Error('there is no API key')
  // }
  try {
    const response = await fetch(
      `https://api.ipregistry.co/?key=${process.env.NEXT_PUBLIC_IP_KEY}`
    )
    if (response.status !== 200) return false
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return false
  }
}
