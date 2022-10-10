import React from "react";
import Logo from '../../images/logo.jpeg';
import { Link } from "gatsby";
import './navigation.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const Navigation = ({withBreadcrumb, tourname, textColor}) => {
      const [scrolled,setScrolled]=useState(false);
      const handleScroll=() => {
            const offset=window.scrollY;
            if(offset > 100 ){
                  setScrolled(true);
            }
            else{
                  setScrolled(false);
            }
      }

      useEffect(() => {
            window.addEventListener('scroll',handleScroll)
      })
      var navbarClasses=['navbar', `${textColor}`];
      var logoClasses=[];
      var whatsappClass=[];
      var breadcrumbClasses=[];
      if(scrolled){
            logoClasses.push('scrolled-logo');
            if (typeof tourname !== 'undefined'){
                  navbarClasses.push('scrolled');
            }
            
            var index = navbarClasses.indexOf(`${textColor}`);
            if (index > -1) {
                  navbarClasses.splice(index, 1);
            }
            whatsappClass.push('whatsapp-scrolled');
            breadcrumbClasses.push('white');
      }

      function BreadcrumbNav({title}) {
            return (
            <Breadcrumb className={`${withBreadcrumb}`}>
            <Breadcrumb.Item className={`breadcrumb-item-main ${breadcrumbClasses}`} href="/">Página principal</Breadcrumb.Item>
            <Breadcrumb.Item className={`${breadcrumbClasses}`} active>
                  {title}
            </Breadcrumb.Item>
            </Breadcrumb>
            );
      }

      return (
            <Navbar fixed="top" className={`navigation-container ${navbarClasses.join(" ")}`}>
                  <Link to="/" className={`logo ${logoClasses.join(" ")}`}>
                        <img src={Logo} alt="Bomfini Tours Logo" />
                  </Link>
                  <BreadcrumbNav className="breadcumb" title={tourname} />    
            </Navbar>
      );
}

export default Navigation;