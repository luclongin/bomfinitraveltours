import React from "react";
import TourDetail from "../components/tourdetail/tourdetail.component";
import tours from "../tours";

const Tour2Dias = () => {
      return (
            <div>
                  <TourDetail specificTourContent={tours.tour2dias} tourTitle="Tour de 2 días" tourTitleOptional="OPCIÓN 1"/>
            </div>
      );
}

export default Tour2Dias;