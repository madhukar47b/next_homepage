import Image from "next/image";
import vectorShape from "../../../assets/image/vector.svg";
import chart from "../../../assets/image/chart.svg";

const ChartContent = () => {
  return (
    <section className="relative h-[28rem] bg-[#ECF4FD]">
      <div className="md:container md:mx-auto pt-28">
        <Image
          src={vectorShape}
          alt="img"
          className="absolute left-0 bottom-0 w-96"
        />
        <div className="grid grid-cols-2">
          <div className="z-10">
            <h1 className="font-bold text-3xl mb-6">
              $7M+ paid out to investors
            </h1>
            <p className="font-light text-stone-500 mb-10">
              Next Invest has already paid out over $7M in cash returns to
              investors. Earn potential cash payments through unique
              revenue-share and debt financing investments.
            </p>
          </div>
          <div>
            <Image src={chart} alt="img" className="w-[26rem] float-right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartContent;
