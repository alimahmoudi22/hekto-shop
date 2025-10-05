const DiscountMenu = () => {
  return (
    <ul className="flexCenter flex-wrap gap-x-7 sm:gap-x-15 mt-5 text-featuredDescriptionText gap-y-2">
      <li>
        <button className="cursor-pointer text-headerPink underline underline-offset-4">
          Wood Chair
        </button>
      </li>
      <li>
        <button className="cursor-pointer">Plastic Chair</button>
      </li>
      <li>
        <button className="cursor-pointer">Sofa Collection</button>
      </li>
    </ul>
  );
};

export default DiscountMenu;
