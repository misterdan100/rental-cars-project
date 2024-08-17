import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Calendar } from "@/components/ui/calendar"
import { Car } from "@prisma/client";
import React, { useState } from "react";
import CalendarSelector from "./CalendarSelector/CalendarSelector";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";

export default function ModalAddReservation(props: ModalAddReservationProps) {
    const { car } = props
    const [dateSelected, setDateSelected] = useState<{
        from: Date | undefined,
        to: Date | undefined
    }>({
        from: new Date(),
        to: addDays(new Date(), 5)
    })

    const onReserveCar = async (car: Car, dateSelected: DateRange) => {
        console.log('RESERVE CAR')
    }

    const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Reserve Car
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Select the dates to rent the car.</AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector 
                setDataSelected={setDateSelected}
                carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Reserve Car
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
