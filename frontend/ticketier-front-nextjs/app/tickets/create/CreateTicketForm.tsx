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
        <form onSubmit={handleSubmit(onSubmitFunction)} className=""></form>
      </>
    </>
  );
};

export default CreateTicketForm;
