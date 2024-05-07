import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import shapeImg from "../../../assets/image/Img.svg";

const GalleryContent = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://next-homepage-sigma.vercel.app/api/offerings")
      .then((response) => {
        setData(response?.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const renderCards = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {data?.offerings.map((cardData: any) => {
          return (
            <div className="shadow-lg" key={cardData.id}>
              <div className="">
                <Image src={shapeImg} alt="img" />
              </div>
              <div className="p-4">
                <h1 className="font-bold text-lg">{cardData.name}</h1>
                <p className="font-light text-stone-500 text-sm">
                  {cardData.city}
                </p>
                <p className="my-6 text-sm">{cardData.description}</p>
                <progress value={70} max={100} className="w-full h-[8px]" />
                <div className="text-sm">
                  <span className="font-bold text-[#7B61FF] me-1">
                    ${cardData.raisedAmount}
                  </span>
                  raised of ${cardData.totalAmount}
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
