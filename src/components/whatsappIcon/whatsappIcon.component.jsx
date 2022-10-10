import React from "react";
import './whatsappIcon.styles.scss';
import whatsappLogo from '../../images/icon-whatsapp.png';
import { Link } from "gatsby";

const WhatsappIcon = () => {
      return(
            <div fixed="bottom" className="whatsapp-icon-fixed">
                  <Link to="https://wa.me/59172384269">
                        <img src={whatsappLogo} alt="Whatsapp Icon" />
                  </Link>
            </div>
      );
}

export default WhatsappIcon;