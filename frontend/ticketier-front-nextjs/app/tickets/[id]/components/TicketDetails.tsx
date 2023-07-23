import { Ticket } from "@/typings/generalTypes";
import React from "react";

interface Props {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: Props) => {
  return (
    <div className="border-2 border-gray-300 flex flex-col gap-y-4 p-4 rounded-lg">
      <div>
        <span className="text-lg font-bold text-sky-900 mr-4">Ticket Id</span>
        <span className="text-lg">{ticket.id}</span>
      </div>

      <div>
        <span className="text-lg font-bold text-sky-900 mr-4">
          Pasenger Name
        </span>
        <span className="text-lg">{ticket.passengerName}</span>
      </div>
    </div>
  );
};

export default TicketDetails;
