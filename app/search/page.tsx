import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RestaurantCard from './components/RestaurantCard'

const Page = () => {
    return (
        <>
            <Header/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <Sidebar/>
                <div className="w-5/6">
                    <RestaurantCard/>
                </div>
            </div>
        </>
    )
}

export default Page