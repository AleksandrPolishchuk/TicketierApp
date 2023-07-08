import { Ticket } from "@/typings/generalTypes";
import React from "react";

interface Props {
  ticketsData: Ticket[];
}

const TicketsContent = ({ ticketsData }: Props) => {
  return (
    <div>
      <h1>TisketsContent</h1>
      <div>{JSON.stringify(ticketsData)}</div>
    </div>
  );
};

export default TicketsContent;
