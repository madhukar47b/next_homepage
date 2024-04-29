"use client";

const Header = () => {
  const menuList: string[] = [
    "Investment opportunity",
    "How it works",
    "About us",
  ];
  return (
    <nav className="py-2 px-4 bg-[#67bdce]">
      <div className="flex justify-between  md:container md:mx-auto">
        <div className="font-bold py-3 text-white">NEXT INVEST</div>
        <div className="p-3">
          {menuList.map((item, index) => {
            return (
              <a key={index} href={item} className="font-medium p-3 text-white">
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Header;
