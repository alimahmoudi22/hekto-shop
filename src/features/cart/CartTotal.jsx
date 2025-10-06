const CartTotal = () => {
  return (
    <div className="flex-auto">
      <h6 className="font-josefin font-bold text-xl text-featuredDescriptionText text-center">
        Cart Total
      </h6>
      <div className="bg-breadCrumbBG px-6 py-8 mt-10 space-y-8  text-featuredDescriptionText">
        <div className="flex items-center justify-between border-b-2 pb-3 border-[#E8E6F1]">
          <span className="text-lg font-semibold">Subtotals:</span>
          <span>£219.00</span>
        </div>
        <div className="flex items-center justify-between border-b-2 pb-3 border-[#E8E6F1]">
          <span className="text-lg font-semibold">Totals:</span>
          <span>£325.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
