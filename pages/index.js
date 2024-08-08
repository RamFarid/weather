import Head from 'next/head'
import { Poppins } from 'next/font/google'
import DetailedWeather from '@/components/TimeWeatherDetails/DetailedWeather'
import SearchBar from '@/components/SearchBar/SearchBar'
import AsideDetails from '@/components/AsideDetails/AsideDetails'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name='description' content='DESCRIPTION' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${poppins.className}`}>
        <SearchBar />
        <AsideDetails />
        <DetailedWeather />
      </main>
    </>
  )
}
