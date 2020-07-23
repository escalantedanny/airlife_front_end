import React, { useState } from 'react';
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
      height: '24px',
      width: '24px'
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
      padding: '1em 1em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: 'transparent'
    },
    bmItemList: {
      color: 'transparent',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block',
      color: 'white',
      textAlign: 'center',
      textDecoration: 'none'
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
        <a target="_blank" id="nosotros" className="menu-item link-nosotros" href="http://airlife.com/nosotros/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empresa &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a target="_blank" id="tecnologia" className="menu-item link-tecnologia" href="/">&nbsp;&nbsp;&nbsp;&nbsp;Tecnolog&iacute;a &nbsp;&nbsp;&nbsp;</a>
        <a target="_blank" id="certificaciones" className="menu-item link-certificaciones" href="/about">&nbsp;Certificaciones&nbsp;</a>
        <a target="_blank" id="transporte" className="menu-item link-transport" href="http://airlife.com/transport/">&nbsp;&nbsp;&nbsp;&nbsp;Transporte&nbsp;&nbsp;&nbsp;</a>
        <a target="_blank" id="business" className="menu-item link-business" href="http://airlife.com/business/">&nbsp;&nbsp;&nbsp;&nbsp;Businesses&nbsp;&nbsp;</a>
        <a target="_blank" id="health" className="menu-item link-health" href="http://airlife.com/health/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a target="_blank" id="home" className="menu-item link-home" href="http://airlife.com/home/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a target="_blank" id="publi_spaces" className="menu-item link-publicspaces" href="http://airlife.com/public_spaces/">&nbsp;&nbsp;Public spaces</a>
        <a target="_blank" id="industrial" className="menu-item link-industrial" href="http://airlife.com/industrial/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Industrial &nbsp;&nbsp;&nbsp;&nbsp;</a>

      </Menu>
    );
}
 
export default BurguerMenu;