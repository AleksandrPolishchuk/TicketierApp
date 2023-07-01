import React from "react";
import { Ticket } from "@/typings/generalTypes";
import BackButton from "@/components/back-button/BackButton";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";

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
    </div>
  );
};

export default TicketsListPage;
