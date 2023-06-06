import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'
import Header from './components/Header'
import RestaurantNavbar from './components/RestaurantNavbar'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Reviews from './components/Reviews'

const RestaurantDetail = () => {
  return (
<main className="bg-gray-100 min-h-screen w-screen">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
    <Navbar/>
    <Header/>
    {/* NAVBAR */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar/>
        {/* TITLE */}
        <div className="mt-4 border-b pb-6">
          <h1 className="font-bold text-6xl">Milesstone Grill</h1>
        </div>
        <Rating/>
        <Description/>

        <Images/>
        <Reviews/>
      </div>
      <div className="w-[27%] relative text-reg">

      </div>
    </div>
  </main>
</main>

  )
}

export default RestaurantDetail