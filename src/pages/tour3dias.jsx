import React from "react";
import TourDetail from "../components/tourdetail/tourdetail.component";
import tours from "../tours";

const Tour3Dias = () => {
      return (
            <div>
                  <TourDetail specificTourContent={tours.tour3dias} tourTitle="Tour de 3 días"/>
            </div>
      );
}

export default Tour3Dias;