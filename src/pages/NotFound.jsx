import BreadCrumb from "../ui/breadCrumb/BreadCrumb";
import ops from "../assets/notfound/ops.png";
import BackButton from "../ui/BackButton";

const NotFound = () => {
  return (
    <main>
      <BreadCrumb />
      <section className="container mt-10 flex flex-col items-center">
        <img src={ops} alt="ops" />
        <p className="font-josefin font-bold text-2xl text-featuredDescriptionText -mt-10 mb-10">
          Oops! The page you requested was not found!
        </p>
        <BackButton />
      </section>
    </main>
  );
};

export default NotFound;
