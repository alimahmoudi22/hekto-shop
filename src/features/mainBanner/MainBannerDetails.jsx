const MainBannerDetails = () => {
  return (
    <ul className="text-[#ACABC3] mt-7.5 flex flex-col items-start gap-y-3.5 pl-6 text-center text-sm sm:text-base">
      <li className="relative before:absolute before:size-3 before:bg-[#2BF5CC] before:rounded-full before:top-1.5 before:-left-6">
        <p>Arms, backs and seats are structurally reinforced</p>
      </li>
      <li className="relative before:absolute before:size-3 before:bg-[#F52B70] before:rounded-full before:top-1.5 before:-left-6">
        <p>All frames constructed with hardwood solids and laminates</p>
      </li>
      <li className="relative before:absolute before:size-3 before:bg-[#2B2BF5] before:rounded-full before:top-1.5 before:-left-6">
        <p className="max-w-116 text-left">
          Reinforced with double wood dowels, glue, screw - nails corner blocks
          and machine nails
        </p>
      </li>
    </ul>
  );
};

export default MainBannerDetails;
