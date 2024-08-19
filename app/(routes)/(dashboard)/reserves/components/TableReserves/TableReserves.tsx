import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableReservesProps } from "./TableReserves.types";
import { formatPrice } from "@/lib/formatPrice";

export default function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount)
  }, 0)
  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Car</TableHead>
          <TableHead className="text-center">Date Start</TableHead>
          <TableHead className="text-center">Datet End</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map( order => (
            <TableRow key={order.id}>
            <TableCell className="font-medium">{order.carName}</TableCell>
            <TableCell className="text-center">{new Date(order.orderDate).toLocaleDateString()}</TableCell>
            <TableCell className="text-center">{new Date(order.orderEndDate).toLocaleDateString()}</TableCell>
            <TableCell className="flex justify-center">
                <div  className={`p-2 text-white bg-green-600 rounded-lg w-fit`}>{order.status}</div>
            </TableCell>
            <TableCell className="text-center">{formatPrice(Number(order.totalAmount))}</TableCell>
            </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-center">{formatPrice(Number(totalAmount))}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
