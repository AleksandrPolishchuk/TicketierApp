import BackButton from "@/components/back-button/BackButton";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import GeneralInnerTitle from "@/components/general-inner-title/GeneralInnerTitle";
import Link from "next/link";
import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";

const TicketCreatePage = () => {
  return (
    <div className="pageGeneralClass">
      <div className="flex justify-start items-center gap-x-4">
        <BackButton destination="/tickets" />
        <BreadCrumb
          items={[
            {
              label: "Tickets",
              route: "/tickets",
            },
            {
              label: "Create",
              route: "/",
            },
          ]}
        />
      </div>

      <div>
        <GeneralInnerTitle title="Create Ticket" />
      </div>
    </div>
  );
};

export default TicketCreatePage;
