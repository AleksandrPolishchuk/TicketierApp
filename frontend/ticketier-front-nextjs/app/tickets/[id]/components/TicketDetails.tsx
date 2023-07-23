import { Ticket } from "@/typings/generalTypes";
import React from "react";

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props) => {
  return (
    <div>
      <div className="border-gray-100 border-2">
        <span>Ticket Id</span>
        <span>{ticket.id}</span>
      </div>
    </div>
  );
};

export default TicketDetails;
