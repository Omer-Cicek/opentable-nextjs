import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RestaurantCard from './components/RestaurantCard'

const Page = () => {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
        <main className="max-w-screen-2xl m-auto bg-white">
            <Navbar/>
            <Header/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <Sidebar/>
                <div className="w-5/6">
                    <RestaurantCard/>
                </div>
            </div>
        </main>
    </main>

  )
}

export default Page