import LinkButton from "../../ui/LinkButton";

const Newsletter = () => {
  return (
    <section className='newsletter mt-20 bg-[url("../assets/home/newsletter/Bg.jpg")] bg-cover bg-center bg-no-repeat flexCenter flex-col pt-43.5 pb-25 mb-10'>
      <h3 className="font-josefin font-bold text-featuredDescriptionText text-xl xs:text-2xl md:text-4xl text-center leading-8 xs:leading-10 sm:leading-12 mb-7">
        Get Leatest Update By Subscribe
        <br />
        0ur Newslater
      </h3>
      <LinkButton type="primary" to={"/news"}>
        Go News
      </LinkButton>
    </section>
  );
};

export default Newsletter;
