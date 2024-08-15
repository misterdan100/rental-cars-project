import { ButtonEditCarProps } from "./ButttonEditCar.types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import FormEditCar from "../FormEditCar/FormEditCar";

export default function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog} >
        <DialogTrigger asChild>
            <Button variant='outline' onClick={() => setOpenDialog(true)} >
                Edit
                <Pencil className="w-4 h-4 ml-2" />
            </Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogDescription>
                    <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
                </DialogDescription>
            </DialogHeader>
        </DialogContent>

    </Dialog>
  );
}
