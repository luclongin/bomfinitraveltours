import React from "react";
import TourDetail from "../components/tourdetail/tourdetail.component";
import tours from "../tours";

const Tour1Dia = () => {
      return (
            <div>
                  <TourDetail specificTourContent={tours.tour1dia} tourTitle="Tour de 1 día" tourTitleOptional="STANDARD"/>
            </div>
      );
}

export default Tour1Dia;