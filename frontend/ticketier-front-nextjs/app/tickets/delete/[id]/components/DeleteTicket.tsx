"use client";
import { Ticket } from "@/typings/generalTypes";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomSpinner from "@/components/custom-spinner/CustomSpinner";
import { MdOutlineDelete } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

interface Props {
  ticket: Ticket;
}

const DeleteTicket = ({ ticket }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const deleteHandlerFunction = async () => {
    try {
      setLoading(true);
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/delete/${ticket.id}`
      );
      router.push("/tickets");
      router.refresh();
      toast.success("Ticket deleted successfully");
    } catch (error) {
      // Handled
      console.log(error);
      toast.error("Error on deleting  Ticket");
    }
  };

  return (
    <>
      {loading && <CustomSpinner />}
      <>
        <div
          className={`border-2 border-red-200 w-96 max-w-full mx-auto mt-4 p-2 rounded-lg ${
            loading ? "blur-xl" : ""
          }`}
        >
          <h1 className="mx-4 my-2 text-red-600">
            Are You sure you want to delete Ticket with this information?{" "}
          </h1>
        </div>
      </>
    </>
  );
};

export default DeleteTicket;