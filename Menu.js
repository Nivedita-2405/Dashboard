import React from 'react';
import './Menu.css';
import DIcon from '../img/dicon.png';
import { FaHome, FaPoll, FaCalendarDay, FaRegSquare, FaCalendarCheck, FaSignOutAlt } from "react-icons/fa";

const Menu = () => {
  return (
    <menu>
      <img src={DIcon} alt=""/>

      <ul id="mainMenu">
        <Icon icon={<FaHome/>}/>
        <Icon icon={<FaPoll/>}/>
        <Icon icon={<FaCalendarDay/>}/>
        <Icon icon={<FaRegSquare/>}/>
        <Icon icon={<FaCalendarCheck/>}/>
      </ul>
      <ul className="signout">
      <Icon icon={<FaSignOutAlt/>}/>
      </ul>
    </menu>
  );
}

// child component for icons
const Icon =  ({icon}) => (
  <li>
    <a>{icon}</a> 
  </li>
);

export default Menu;
