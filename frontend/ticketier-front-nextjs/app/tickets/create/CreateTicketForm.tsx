"use client";
import CustomSpinner from "@/components/custom-spinner/CustomSpinner";
import { TicketCreateDto } from "@/typings/generalTypes";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const CreateTicketForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<TicketCreateDto>({});
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmitFunction = async (data: TicketCreateDto) => {
    console.log(data);
  };

  return (
    <>
      {loading && <CustomSpinner />}
      <>
        <form
          onSubmit={handleSubmit(onSubmitFunction)}
          className={`border-2 border-gray-200 w-96 max-w-full mx-auto mt-4 p-2 rounded-lg ${
            loading ? "blue-xl" : ""
          }`}
          noValidate
        >
          <div className="m-4">
            <label className="text-slate-500">Ticket Time</label>
          </div>
        </form>
      </>
    </>
  );
};

export default CreateTicketForm;
