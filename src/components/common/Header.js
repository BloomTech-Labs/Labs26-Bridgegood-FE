import React from 'react';
import './Header.less';

const Header = () => {
  return (
    <div>
      <img src={'/img/BRIDGEGOOD.png'} alt="BridgeGood Banner" />
    </div>
  );
};

export default Header;

// const Header = props => {
//     return (
//       <div className="header-component">
//         <h1>{props.title}</h1>
//       </div>
//     );
//   };
