import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer/footer.component";
import TourDetail from "../components/tourdetail/tourdetail.component";

const Tour1Dia = () => {
      return (
            <div>
                  <TourDetail tourname="Tour de 1 día"/>
            </div>
      );
}

export default Tour1Dia;