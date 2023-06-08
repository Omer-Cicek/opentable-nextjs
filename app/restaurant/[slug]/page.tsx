import React from 'react'
import RestaurantNavbar from './components/RestaurantNavbar'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Reviews from './components/Reviews'
import ReservationCard from './components/ReservationCard'
import { PrismaClient, Review } from '@prisma/client'
import { notFound } from 'next/navigation'

interface Restaurant{
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    reviews: Review[]
}

const prisma = new PrismaClient()

const fetchRestaurantsBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant= await prisma.restaurant.findUnique({
        where:{
            slug
        },
        select:{
            id:             true,
            name:           true,
            images:         true,
            description:    true,
            slug:           true,
            reviews:        true
        }
    })

    if(!restaurant){
        // throw new Error('Can not find a restaurant')
        notFound()
    }
    return restaurant
}

const RestaurantDetail = async ({params}: {params: {slug: string }}) => {
    
    const restaurant = await fetchRestaurantsBySlug(params.slug)
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <RestaurantNavbar slug={restaurant.slug}/>
                <div className="mt-4 border-b pb-6">
                <h1 className="font-bold text-6xl">{restaurant.name}</h1>
                </div>
                <Rating reviews={restaurant.reviews}/>
                <Description description={restaurant.description}/>

                <Images images={restaurant.images}/>
                <Reviews reviews={restaurant.reviews}/>
            </div>
            <div className="w-[27%] relative text-reg">
                <ReservationCard/>
            </div>
        </>
    )
}

export default RestaurantDetail