import BackButton from "@/components/back-button/BackButton";
import BreadCrumb from "@/components/bread-crumb/BreadCrumb";
import GeneralInnerTitle from "@/components/general-inner-title/GeneralInnerTitle";
import React from "react";

interface Props {
  ticket: Ticket;
}

const TicketsDetailsPage = () => {
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

      <div>
        <GeneralInnerTitle title="Tickets List" />
      </div>
    </div>
  );
};

export default TicketsDetailsPage;
