import LatestBlogCard from "./LatestBlogCard";

import image1 from "../../assets/home/latestBlog/image1.jpg";
import image2 from "../../assets/home/latestBlog/image2.jpg";
import image3 from "../../assets/home/latestBlog/image3.jpg";
import SectionTitle from "../../ui/SectionTitle";

const fakeData = [
  {
    id: 600,
    image: image1,
    title: "Top esssential Trends in 2021",
    writer: "SaberAli",
    date: "21 August,2020",
    text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
  },
  {
    id: 601,
    image: image2,
    title: "Top esssential Trends in 2021",
    writer: "Surfauxion",
    date: "21 August,2020",
    text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
  },
  {
    id: 602,
    image: image3,
    title: "Top esssential Trends in 2021",
    writer: "SaberAli",
    date: "21 August,2020",
    text: "More off this less hello samlande lied muchover tightly circa horse taped mightly",
  },
];

const LeatestBlog = () => {
  return (
    <section className="leatestBlog mt-25">
      <div className="container">
        <SectionTitle>Latest Blog</SectionTitle>
        <div className="wrapper mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          {fakeData.map((item) => (
            <LatestBlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeatestBlog;
