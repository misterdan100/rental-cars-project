import { auth } from "@clerk/nextjs/server";
import { ButtonAddCar } from "./components/ButtonAddCar";
import ListCars from "./components/ListCars/ListCars";
import { redirect } from "next/navigation";
import { isAdministrator } from "@/lib/isAdministrator";
import { db } from "@/lib/db";


export default async function CarManagerPage() {
    const { userId } = auth()

    if(!userId || !isAdministrator(userId)) redirect('/')

    const car = await db.car.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })


    return (
        <div>
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold">Manage your cars</h2>
                <ButtonAddCar />
            </div>
            <ListCars cars={car}/>
        </div>
    )
}