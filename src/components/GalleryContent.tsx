import Image from "next/image";
import shapeImg from "../assets/image/Img.svg";

const GalleryContent = () => {
  const renderCards = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
          return (
            <div className="shadow-lg" key={index}>
              <div className="">
                <Image src={shapeImg} alt="img" />
              </div>
              <div className="p-4">
                <h1 className="font-bold text-lg">Oxalis</h1>
                <p className="font-light text-stone-500 text-sm">
                  Brooklyn, NY
                </p>
                <p className="my-6 text-sm">
                  A recognized leader in language immersion & early education,
                  opening second school.
                </p>
                <progress value={70} max={100} className="w-full h-[8px]" />
                <div className="text-sm">
                  <span className="font-bold text-[#7B61FF]">$574,920</span>{" "}
                  raised of $1,000,000
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="relative">
      <div className="md:container md:mx-auto pt-32">
        <div className="text-center pt-10">
          <h1 className="font-bold text-3xl mb-6">
            Offerings open for investment
          </h1>
          <p className="font-light text-stone-500 mb-10">
            Explore pre-vetted investment opportunities available in a<br />{" "}
            growing number of industry categories.
          </p>
        </div>
        {renderCards()}
        <div className="text-center my-10">
          <button className="border-2 border-[#7B61FF] text-[#7B61FF] text-sm px-4 py-2 cursor-pointer hover:bg-[#7B61FF] hover:text-white font-semi-bold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryContent;
