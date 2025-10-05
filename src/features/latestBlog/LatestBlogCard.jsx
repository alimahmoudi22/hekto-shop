import { PenTool, CalendarDays } from "lucide-react";
import { Link } from "react-router";

const LeatestBlogCard = ({ image, title, writer, date, text }) => {
  return (
    <div className="leatestBlogCard shadow-hektoOffer">
      <div className="picture overflow-hidden rounded-lg">
        <img src={image} alt="leatestBlogPicture" className="w-full" />
      </div>
      <div className="desc pl-5 pb-9 text-featuredDescriptionText">
        <div className="mt-5 flex items-center gap-x-7  text-sm font-josefine font-normal">
          <div className="flex items-center gap-x-1">
            <PenTool size={14} className="text-headerPink" />
            <span>{writer}</span>
          </div>
          <div className="flex items-center gap-x-1">
            <CalendarDays size={14} className="text-[#FFA454]" />
            <span>{date}</span>
          </div>
        </div>
        <div className="mt-7 text-hektoText">
          <Link to={"/blog"}>
            <h4 className="font-josefine font-bold text-lg hover:text-headerPink transition-colors">
              {title}
            </h4>
          </Link>
          <p className="text-[#72718F] font-lato font-normal mt-4">{text}</p>
          <Link
            to={"/blog"}
            className="inline-block mt-4 underline underline-offset-2 hover:text-headerPink transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeatestBlogCard;
