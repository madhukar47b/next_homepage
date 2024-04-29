import Image from "next/image";
import shape from "../assets/image/shape.svg";

const MainContent = () => {
  const titleText: string = "Meaningful investments in Main Street businesses";
  const secondaryText: string =
    "Browse vetted investment offerings in communities all over the US.";
  return (
    <section className="h-[38rem] px-4 bg-[url('../assets/image/bg-img.svg')] bg-center relative">
      <div className="md:container md:mx-auto pt-32 pb-32 bg-[url('../assets/image/circle.svg')] bg-no-repeat bg-[left_top_3rem] bg-[length:34rem_22rem]">
        <div className="text-white font-bold text-3xl mb-10 w-96">
          {titleText}
        </div>
        <div className="text-white mb-8 font-light w-80">{secondaryText}</div>
        <button className="bg-[#7B61FF] text-white px-10 py-2 font-semi-bold text-sm px-8 hover:bg-white hover:text-[#7B61FF]">
          Get Started
        </button>
      </div>
      <Image
        src={shape}
        alt="img"
        className="right-0 bottom-0 absolute w-[24rem]"
      />
    </section>
  );
};
export default MainContent;
