import Navbar from "@/components/navbar/Navbar";
import "@/styles//globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Ticketier",
  description: "This is a project for Ticketier Next.js Front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
