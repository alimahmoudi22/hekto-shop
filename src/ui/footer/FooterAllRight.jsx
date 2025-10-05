import { Facebook, Instagram, Twitter } from "lucide-react";

const FooterAllRight = () => {
  return (
    <div className="bg-[#E7E4F8] mt-25 py-4">
      <div className="container">
        <div className="wrapper flex items-center justify-between">
          <p className="font-semibold text-[#9DA0AE]">
            ©Webecy - All Rights Reserved
          </p>
          <div className="icons flex items-center gap-x-2.5 text-white">
            <div className="size-5 rounded-full bg-featuredDescriptionText flex items-center justify-center">
              <Facebook size={14} />
            </div>
            <div className="size-5 rounded-full bg-featuredDescriptionText flex items-center justify-center">
              <Instagram size={14} />
            </div>
            <div className="size-5 rounded-full bg-featuredDescriptionText flex items-center justify-center">
              <Twitter size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAllRight;
