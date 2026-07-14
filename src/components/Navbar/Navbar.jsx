import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import Logo from "../../assets/BizFlow_logo.png";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Solutions", href: "#solutions" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="BizFlow" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex gap-8 text-[15px] font-medium text-slate-600">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="transition hover:text-black">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button className="rounded-lg px-5 py-2 font-medium text-slate-700 hover:bg-slate-100">
              Login
            </button>

            <button className="rounded-lg bg-slate-900 px-5 py-2 font-medium text-white hover:bg-black">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="text-3xl lg:hidden">
          {open ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white lg:hidden">
          <ul className="flex flex-col p-6 text-slate-700">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <button className="mt-4 rounded-lg border py-3">Login</button>

            <button className="mt-3 rounded-lg bg-slate-900 py-3 text-white">
              Get Started
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
