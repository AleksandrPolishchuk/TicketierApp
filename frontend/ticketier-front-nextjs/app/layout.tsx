import Navbar from "@/components/navbar/Navbar";
import "@/styles//globals.css";

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
      <Navbar />
      <main>{children}</main>
    </html>
  );
}
