import { Inter } from '@next/font/google'
import Navbar from './components/Navbar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client'

const prisma = new PrismaClient()
const inter = Inter({ subsets: ['latin'] })

export interface RestaurantCardType{
	id: 		number,
	name: 		string,
	main_image: string,
	cuisine: 	Cuisine,
	location: 	Location,
	price:		PRICE,
	slug:		string
}

const fetchRestaurants = async (): Promise< RestaurantCardType[] > => {
	const restaurants = await prisma.restaurant.findMany({
		select:{
			id: 		true,
			name: 		true,
			main_image: true,
			slug: 		true,
			cuisine: 	true,
			location: 	true,
			price:		true
		}
	})
	return restaurants
}

export default async function Home() {
	const restaurants = await fetchRestaurants()

	console.log(restaurants)
	return (
		<main>
			<Header/>
			<div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
				{restaurants.map(restaurant => (
					<RestaurantCard restaurant={restaurant}/>
				))}
			</div>
		</main>
  	)
}
