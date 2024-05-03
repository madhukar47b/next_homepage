import Image from "next/image";
import human from "../../../assets/image/Investing-cuate.svg";
const RaiseCapital = () => {
  return (
    <section className="relative h-[28rem]">
      <div className="md:container md:mx-auto pt-24">
        <div className="grid grid-cols-2">
          <div className="z-10">
            <h1 className="font-bold text-3xl mb-6">
              Looking to raise capital for your growing business?
            </h1>
            <p className="font-light text-stone-500 mb-10">
              Whether expanding or opening a brand-new concept, we make it easy
              to raise money from thousands of local investors.
            </p>
            <button className="bg-[#7B61FF] text-white px-10 py-2 font-semi-bold text-sm px-8">
              Apply online
            </button>
          </div>
          <div>
            <Image src={human} alt="img" className="w-[20rem] float-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaiseCapital;
