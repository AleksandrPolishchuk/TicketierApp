import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { MdAirplaneTicket } from "react-icons/md";

const menuItems = [
  { id: 1, label: "Home", route: "/", icon: <AiOutlineHome /> },
  { id: 2, label: "Tickets", route: "/tickets", icon: <AiOutlineHome /> },
];

const Navbar = () => {
  return <div>Navbar</div>;
};

export default Navbar;
