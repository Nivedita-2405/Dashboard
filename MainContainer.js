import React from 'react';
import './MainContainer.css';
import Banner from "../img/banner.jpg";
import Orders from "../img/orders.jpg";
import Netprofit from "../img/Net-profit.jpg";
import Feedback from "../img/customersfeedback.jpg";

function MainContainer() {
  return (
    <div className='mainContainer'>
      <div className='left'>
        <h4>Dashboard</h4>
        <div className='banner' style = {{
          background: `url(${Banner})`,
          backgroundRepeat : 'no-repeat',
          backgroundPosition : 'center',
          backgroundSize : 'cover'
      }}>
        </div>
        <div className='orders' style = {{
          background: `url(${Orders})`,
          backgroundSize : 'cover'
      }}>
        </div>
      </div>
      <div className='right'>
      <div className='netprofit' style = {{
          background: `url(${Netprofit})`,
          backgroundSize : 'cover'
      }}>
        </div>
        <div className='feedback' style = {{
          background: `url(${Feedback})`,
          backgroundSize : 'cover',
          backgroundRepeat : 'no-repeat',
      }}>
        </div>
      </div>
    </div>
  )
}

export default MainContainer;
