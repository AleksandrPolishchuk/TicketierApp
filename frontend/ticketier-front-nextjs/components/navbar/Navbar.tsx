import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdAirplaneTicket } from "react-icons/md";

const menuItems = [
  { id: 1, label: "Home", route: "/", icon: <AiOutlineHome /> },
  { id: 2, label: "Tickets", route: "/tickets", icon: <AiOutlineHome /> },
];

const Navbar = () => {
  return (
    <div className="bg-gray-100 flex justify-between items-center p-2 md:p-4 lg:px-8 lg:py-4 text-2x1">
      <div>
        <Link href="/">Ticketier</Link>
      </div>
      <div className="flex items-center gap-x-4">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.route}>
            <span className="max-md:hidden">{item.label}</span>
            <span className="md:hidden text-3x1">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
