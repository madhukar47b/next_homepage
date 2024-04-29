"use client";

const Header = () => {
  const menuList: { name: string; route: string }[] = [
    { name: "Investment opportunity", route: "Home" },
    { name: "How it works", route: "Projects" },
    { name: "About us", route: "Team" },
  ];
  return (
    <nav className="py-2 px-4 bg-[#67bdce]">
      <div className="flex justify-between  md:container md:mx-auto">
        <div className="font-bold py-3 text-white">
          <a className="text-white" href="/">
            NEXT INVEST
          </a>
        </div>
        <div className="p-3">
          {menuList.map((item, index) => (
            <a
              key={index}
              href={`/${item.route}`}
              className="font-medium p-3 text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Header;
