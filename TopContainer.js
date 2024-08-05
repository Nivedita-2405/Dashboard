import React from "react";
import { BiSearch, BiLogoGmail, BiNotification} from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import Image from '../img/image.png'

function TopContainer() {
  return (
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search" />
        <i>
          <BiSearch />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon1">
          <BiLogoGmail />
        </i>
        <i className='profileIcon2'>
                <AiFillSetting/>
            </i>
            <i className='profileIcon3'>
                <BiNotification/>
            </i>
        <div className="profileImage">
             <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TopContainer;