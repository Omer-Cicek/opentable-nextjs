import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RestaurantCard from './components/RestaurantCard'
import { PrismaClient, Location, Cuisine, PRICE } from '@prisma/client';

const prisma = new PrismaClient()

const fetchRestaurantsByCity = (city: string | undefined) => {

    const select = {
        id: true,
        name: true,
        main_image: true,
        price: true,
        cuisine: true,
        location: true,
        slug: true
    }

    if(!city) return prisma.restaurant.findMany({select})
    return prisma.restaurant.findMany({
        where:{
            location:{
                name:{
                    equals: city.toLocaleLowerCase()
                }
            }
        },
        select,
    })
}

const fetchLocations = () => {
    return prisma.location.findMany()
}

const fetchCuisines = () => {
    return prisma.cuisine.findMany()
}

const Page = async ({searchParams}: {searchParams:{ city?: string, cuisine?: string, price?: PRICE}}) => {

    const restaurants= await fetchRestaurantsByCity(searchParams.city)
    const locations = await fetchLocations()
    const cuisines = await fetchCuisines()
    console.log(locations, cuisines)

    return (
        <>
            <Header/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <Sidebar locations={locations} cuisines={cuisines} searchParams={searchParams}/>
                <div className="w-5/6">
                    {restaurants.length ? (
                        <>
                        {restaurants?.map(restaurant =>(
                            <RestaurantCard  restaurant={restaurant} key={restaurant.id}/>
                        ))}
                        </>
                        ) : <p>Sorry , we found no restaurants in this area.</p>}
                </div>
            </div>
        </>
    )
}

export default Page