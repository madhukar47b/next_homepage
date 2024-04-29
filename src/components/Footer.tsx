const Footer = () => {
  return (
    <section className="relative h-[28rem] bg-[#ECECEC]">
      <div className="md:container md:mx-auto pt-28">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-2">
            <h1 className="font-bold text-2xl mb-6"> NEXT INVEST</h1>
            <p className="font-light font-size-sm">
              Copyright © 2020. LogoIpsum. All rights reserved.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-6">Services</h1>
            <p className="font-light text-sm mb-3">Email Marketing</p>
            <p className="font-light text-sm  mb-3">Campaigns</p>
            <p className="font-light text-sm  mb-3">Branding</p>
            <p className="font-light text-sm  mb-3">Offline</p>
          </div>
          <div>
            <h1 className="font-bold text-2xl mb-6">About</h1>
            <p className="font-light text-sm  mb-3">Our Story</p>
            <p className="font-light text-sm  mb-3">Benefits</p>
            <p className="font-light text-sm  mb-3">Team</p>
            <p className="font-light text-sm  mb-3">Careers</p>
          </div>
        </div>
        <div>
          <p className="font-light text-lg font-light">
            Subscribe to our newsletter
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
