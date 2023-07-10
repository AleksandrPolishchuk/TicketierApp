import React from "react";
import { Ticket } from "@/typings/generalTypes";
import BackButton from "@/components/back-button/BackButton";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import GeneralInnerTitle from "@/components/general-inner-title/GeneralInnerTitle";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Link from "next/link";
import TicketsContent from "./components/TicketsContent";
import TicketsNoData from "./components/TicketsNoData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tickets List | DevEmpower",
  description: "Test Description for tickets list page",
};

async function getTickets(url: string) {
  // This is SSR
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const TicketsListPage = async () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  // Fetch data from url
  const tickets: Ticket[] = await getTickets(url);

  console.log(tickets);

  return (
    <div className="pageGeneralClass">
      <div className="flex justify-start items-center gap-x-4">
        <BackButton destination="/" />
        <BreadCrumb
          items={[
            {
              label: "Tickets",
              route: "/tickets",
            },
          ]}
        />
      </div>

      <div className="flex justify-between items-center">
        <GeneralInnerTitle title="Tickets List" />
        <Link
          href="/tickets/create"
          className="flex items-center gap-2 hover:text-blue-600 transition-all duration-200"
        >
          <AiOutlinePlusSquare className="text-3xl" />
          <span className="text-2xl nax-sm:hidden">Issue Ticket</span>
        </Link>
      </div>

      {/* Render All Tickets */}
      {tickets.length ? (
        <TicketsContent ticketsData={tickets} />
      ) : (
        <TicketsNoData />
      )}
    </div>
  );
};

export default TicketsListPage;
