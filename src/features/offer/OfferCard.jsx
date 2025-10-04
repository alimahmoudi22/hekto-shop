import React from "react";

const OfferCard = ({ image, title, text }) => {
  return (
    <div className="offerCard flexCenter flex-col shadow-hektoOffer px-6.5 pt-14 pb-11">
      <div className="image">
        <img src={image} alt="offerImage" />
      </div>
      <div className="dec text-center mt-6 text-hektoText">
        <h6 className="font-josefine font-semibold text-featuredDescriptionText text-2xl">
          {title}
        </h6>
        <p className="font-lato font-bold mt-4 max-w-54 text-sectionTitle opacity-30">
          {text}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
