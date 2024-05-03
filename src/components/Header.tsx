"use client";
import Link from "next/link";

const Header = () => {
  const menuList: { name: string; route: string }[] = [
    { name: "Investment opportunity", route: "Home" },
    { name: "How it works", route: "Projects" },
    { name: "About us", route: "Team" },
  ];
  return (
    <nav className="px-4 bg-[#67bdce]">
      <div className="flex justify-between  md:container md:mx-auto items-center">
        <div className="font-bold py-3 text-white">
          <Link className="text-white flex" href="/">
            NEXT INVEST
          </Link>
        </div>
        <div className="p-3">
          {menuList.map((item, index) => (
            <Link
              key={index}
              href={`/${item.route}`}
              className="font-medium p-3 text-white"
            >
              {item.name}
            </Link>
          ))}
          <button className="bg-[transparent] text-white px-10 py-2 font-semibold text-sm px-8 border border-white uppercase hover:border-[#7B61FF] hover:bg-[#7B61FF] hover:text-[white]">
            Login
          </button>
          <button className="bg-[transparent] text-white px-10 py-2 font-semibold text-sm px-8 border border-white uppercase hover:border-[white] hover:bg-[white] hover:text-[#7B61FF] ms-3">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Header;
