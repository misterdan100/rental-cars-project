import { formatPrice } from "@/lib/formatPrice";
import { TableReservesProps } from "./TableReserves.types";
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

export function TableReserves(props: TableReservesProps) {
  const { orders } = props;

  const totalAmount = orders.reduce((acc, booking) => {
    return acc + parseFloat(booking.totalAmount);
  }, 0);
  return (
    <Table>
      <TableCaption>A list of your recent bookings.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order Date</TableHead>
          <TableHead className="text-center">Customer ID</TableHead>
          <TableHead className="text-center">Car</TableHead>
          <TableHead className="text-center">Date Start</TableHead>
          <TableHead className="text-center">Date End</TableHead>
          <TableHead className="text-center">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow>
            <TableCell className="font-medium">{new Date(order.createdAt).toLocaleDateString('en-US')}</TableCell>
            <TableCell className="text-center">{order.userId}</TableCell>
            <TableCell className="text-center">{order.carName}</TableCell>
            <TableCell className="text-center">{new Date(order.orderDate).toLocaleDateString('en-US')}</TableCell>
            <TableCell className="text-center">{new Date(order.orderEndDate).toLocaleDateString('en-US')}</TableCell>
            <TableCell className="text-center">{formatPrice(Number(order.totalAmount))}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-center">{formatPrice(totalAmount)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
