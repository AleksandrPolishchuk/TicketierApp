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
            <input
              type="datetime-local"
              className="border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1"
              {...register("time", {
                required: "Ticket Time is required",
                valueAsDate: true,
              })}
            />
            <span className="bg-red-200 text-red-600 rounded-md">
              {errors?.time?.message}
            </span>
          </div>

          <div className="m-4">
            <label className="text-slate-500">Passenger Name</label>
            <input
              autoComplete="off"
              type="text"
              className="border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1"
              {...register("passengerName", {
                required: "Passenger Name is required",
              })}
            />
            <span className="bg-red-200 text-red-600 rounded-md">
              {errors?.passengerName?.message}
            </span>
          </div>

          <div className="m-4">
            <label className="text-slate-500">Passenger SSN</label>
            <input
              autoComplete="off"
              type="number"
              className="border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1"
              {...register("passengerSSN", {
                required: "Passenger SSN is required",
                valueAsNumber: true,
              })}
            />
            <span className="bg-red-200 text-red-600 rounded-md">
              {errors?.passengerSSN?.message}
            </span>
          </div>

          <div className="m-4">
            <label className="text-slate-500">From</label>
            <input
              autoComplete="off"
              type="text"
              className="border-2 border-gray-300 w-full my-2 rounded-lg px-4 py-1"
              {...register("from", {
                required: "From is required",
              })}
            />
            <span className="bg-red-200 text-red-600 rounded-md">
              {errors?.from?.message}
            </span>
          </div>
        </form>
      </>
    </>
  );
};

export default CreateTicketForm;
