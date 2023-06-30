import React from "react";

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
  const tickets = await getTickets(url);

  console.log(tickets);

  return <div>TicketsListPage</div>;
};

export default TicketsListPage;
