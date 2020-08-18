import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

const BurguerMenu = () => {

  var styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '2.5rem',
      height: '1.5rem',
      right: '3rem',
      top: '5%',
      padding: '0',
      justify: 'space-around',
      display: 'flex'
    },
    bmBurgerBars: {
      background: '#f8f8f8'
    },
    bmBurgerBarsHover: {
      background: '#transparent'
    },
    bmCrossButton: {
      height: '36px',
      width: '36px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: 'transparent',
      padding: '4em 0em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: 'transparent'
    },
    bmItemList: {
      color: 'transparent',
      textAlign: 'left',
      padding: '5px 60px',
      float: 'left'
    },
    bmItem: {
      display: 'block',
      color: 'white',
      padding: '20px 70px',
      textDecoration: 'none',
      paddingLeft : '15px',
      height: '90px',
      width: '220px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }

    return (

      <Menu 
        pageWrapId={ "page-wrap" } 
        right
        styles={ styles } 
      >
        <a target="_blank" id="nosotros"  align="left" className="menu-item link-nosotros" href="http://airlife.com/nosotros/">&nbsp;&nbsp;
          <img 
            width="51.55" 
            height="60"
            src={require("assets/images/iconos/iconos-Empresa.png")} 
            alt="empresa"/>&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a target="_blank" id="business" className="menu-item link-business" href="http://airlife.com/business/">&nbsp;&nbsp;
          <img 
            width="56.25" 
            height="60"
            src={require("assets/images/iconos/iconos-Business.png")} 
            alt="business"/>&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a target="_blank" id="health" className="menu-item link-health" href="http://airlife.com/health/">&nbsp;&nbsp;
        <img 
            width="41.35" 
            height="60"
            src={require("assets/images/iconos/iconos-Health.png")} 
            alt="health"/>&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a target="_blank" id="home" className="menu-item link-home" href="http://airlife.com/home/">&nbsp;&nbsp;
        <img 
            width="34.69" 
            height="60"
            src={require("assets/images/iconos/iconos-Home.png")} 
            alt="Home"/>&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        <a target="_blank" id="publi_spaces" className="menu-item link-publicspaces" href="http://airlife.com/public_spaces/">
        <img 
            width="80.72" 
            height="60"
            src={require("assets/images/iconos/iconos-Public spaces.png")} 
            alt="empresa"/>
        </a>
        <a target="_blank" id="industrial" className="menu-item link-industrial" href="http://airlife.com/industrial/">
        <img 
            width="64.69" 
            height="60"
            src={require("assets/images/iconos/iconos-Industrial.png")} 
            alt="Home"/>
        </a>
        

      </Menu>
    );
}
 
export default BurguerMenu;