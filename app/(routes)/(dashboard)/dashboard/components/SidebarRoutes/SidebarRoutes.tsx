"use client";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/nextjs";
import { dataGeneralSidebar } from "./SidebarRoutes.data";
import { dataAdminSidebar } from "./dataAdminSidebar.data";
import SidebarItem from "../SidebarItem/SidebarItem";
import Link from "next/link";

export default function SidebarRoutes() {
  const { userId } = useAuth();
  console.log(userId);

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">GENERAL</p>
          {dataGeneralSidebar?.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <Separator />

        <div className="p-2 md:p-6">
          <p className="mb-2 text-slate-500">ADMIN</p>
          {dataAdminSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>

      <div>
        <Separator />

        <footer className="p-3 mt-3 text-center">
          <p>2024. All rights reserved.</p>
          <p className="italic text-slate-400 text-sm">
            Coded by{" "}
            <Link
              href={"https://github.com/misterdan100"}
              className="hover:text-slate-700"
              target="_blank"
            >
              Daniel Caceres
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
}
