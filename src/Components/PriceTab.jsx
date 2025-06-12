import React from "react";
import PriceTable from "./PriceTable";

function PriceTab() {
  return (
    <div class="container w-full max-w-6xl h-100 mx-auto px-4 py-4 lg:px-0 lg:py-2">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h2 class="sm:text-[50px] leading-[1.1em] text-2xl font-bold title-font mb-2 text-white">
          READY TO GET <span className="text-gredient text-primary">FUNDED?</span> <br/> THEN LET'S GET
          <span className="text-gredient text-primary"> STARTED!</span>
        </h2>
        <p className="text-white text-base mt-6">Our evaluation is based on best practices and International Standards, customized and refined to cater to every trading style.</p>
      </div>
      <PriceTable />
    </div>
  );
}

export default PriceTab;
