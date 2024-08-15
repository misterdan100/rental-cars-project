"use client"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"
import { Fuel, Gauge, Gem, Trash, Upload, User, Users, Wrench } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

import { CardCarProps } from "./CardCar.types"
import ButtonEditCar from "./ButtonEditCar/ButtonEditCar"

export default function CardCar(props: CardCarProps) {
    const { car } = props
  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg transition">
        <Image 
            src={car.photo}
            alt={car.name}
            width={400}
            height={600}
            className="rounded-lg"
        />

        {/* PUBLISHED ALERT */}
        {car.isPublish ? (
            <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-600">Published</p>
        ) : (
            <p className="absolute top-0 left-0 right-0 w-full p-1 text-center text-white bg-red-300">Not Published</p>
        )}

        {/* CARD INFO */}
        <div className="relative p-3">
            <div className="flex flex-col mb-3 gap-x-4">
                <p className="text-xl min-h-16 lg:min-h-fit">{car.name}</p>
                <p >$ {car.priceDay} / day</p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-4">
                <p className="flex items-center">
                    <Gem className="h-4 w-4 mr-2" strokeWidth={1}/>
                    {car.type}
                </p>
                <p className="flex items-center">
                    <Wrench className="h-4 w-4 mr-2" strokeWidth={1}/>
                    {car.transmission}
                </p>
                <p className="flex items-center">
                    <Users className="h-4 w-4 mr-2" strokeWidth={1}/>
                    {car.people}
                </p>
                <p className="flex items-center">
                    <Fuel className="h-4 w-4 mr-2" strokeWidth={1}/>
                    {car.engine}
                </p>
                <p className="flex items-center">
                    <Gauge className="h-4 w-4 mr-2" strokeWidth={1}/>
                    {car.cv} CV
                </p>
            </div>

            <div className="flex justify-between mt-3 gap-x-4">
                <Button variant='outline' onClick={() => console.log('Delete')}>
                    Delete
                    <Trash className="w-4 h-4 ml-2"/>
                </Button>

                <ButtonEditCar carData={car}/>
            </div>

            {car.isPublish ? (
                <Button 
                className="w-full mt-3"
                variant={"outline"}
                onClick={() => console.log('Unpublish')}
                >
                    Unpublish
                    <Upload className="w-4 h-4 ml-2 rotate-180"/>
                </Button>
            ) : (
                <Button 
                className="w-full mt-3"
    
                onClick={() => console.log('Publish')}
                >
                    Publish
                    <Upload className="w-4 h-4 ml-2"/>
                </Button>

            )}

        </div>
    </div>
  )
}
