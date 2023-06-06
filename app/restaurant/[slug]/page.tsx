import Link from 'next/link'
import React from 'react'
import Navbar from '../../components/Navbar'
import Header from './components/Header'
import RestaurantNavbar from './components/RestaurantNavbar'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Reviews from './components/Reviews'
import ReservationCard from './components/ReservationCard'

const RestaurantDetail = () => {
  return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavbar/>
                <div className="mt-4 border-b pb-6">
                <h1 className="font-bold text-6xl">Milesstone Grill</h1>
                </div>
                <Rating/>
                <Description/>

                <Images/>
                <Reviews/>
            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard/>
            </div>
        </>

  )
}

export default RestaurantDetail