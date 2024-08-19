import { Navbar } from "@/components/Shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function orderConfrimationPage() {
  return (
    <div>
        <Navbar />
        <div className="p-6 mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-2xl">¡Thanks you very much for trusting us!</h1>
                <p>You will receive all the information by email shortly.</p>
                <p>You can see all your reservations within the customer area.</p>
                <Link href='/'>
                    <Button>See products again</Button>
                </Link>
            </div>
        </div>
    </div>
  );
}
