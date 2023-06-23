import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdAirplaneTicket } from "react-icons/md";

const menuItems = [
  { id: 1, label: "Home", route: "/", icon: <AiOutlineHome /> },
  { id: 2, label: "Tickets", route: "/tickets", icon: <AiOutlineHome /> },
];

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">Ticketier</Link>
      </div>
      <div>
        {menuItems.map((item) => (
          <Link key={item.id} href={item.route}>
            <span>{item.label}</span>
            <span>{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
