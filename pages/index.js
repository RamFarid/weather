import Head from 'next/head'
import { Inter } from 'next/font/google'
import DetailedWeather from '@/components/TimeWeatherDetails/DetailedWeather'
import SearchBar from '@/components/SearchBar/SearchBar'
import AsideDetails from '@/components/AsideDetails/AsideDetails'
import { useEffect } from 'react'
import getGeolocations from '@/utils/getGeolocations'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
        <meta name='description' content='DESCRIPTION' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className}`}>
        <SearchBar />
        <AsideDetails />
        <DetailedWeather />
      </main>
    </>
  )
}
