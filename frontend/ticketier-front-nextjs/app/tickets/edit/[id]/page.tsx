import React from "react";
import BackButton from "@/components/back-button/BackButton";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import GeneralInnerTitle from "@/components/general-inner-title/GeneralInnerTitle";

const TicketEditPage = () => {
  return (
    <div className="pageGeneralClass">
      <div className="flex justify-start items-center gap-x-4">
        <BackButton destination="/tickets" />
        <BreadCrumb
          items={[
            { label: "Tickets", route: "/tickets" },
            { label: "Edit", route: "/" },
          ]}
        />
      </div>

      <div>
        <GeneralInnerTitle title="Edit Ticket" />
      </div>
    </div>
  );
};

export default TicketEditPage;
