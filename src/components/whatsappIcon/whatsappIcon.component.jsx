import React from "react";
import './whatsappIcon.styles.scss';
import whatsappLogo from '../../images/icon-whatsapp.png';

const WhatsappIcon = () => {
      return(
            <div fixed="bottom" className="whatsapp-icon-fixed">
                  <a href="https://wa.me/59172384269" target="_blank" rel="noreferrer">
                        <img src={whatsappLogo} alt="Whatsapp Icon" />
                  </a>
            </div>
      );
}

export default WhatsappIcon;