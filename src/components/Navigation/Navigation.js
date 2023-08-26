import React, {useState} from 'react';
import Burger from './Burger/Burger';
import LoggedIn from './LoggedIn/LoggedIn';
import SideBar from './SideBar/SideBar';

function Navigation({}) {

    const [toggle, setToggle] = useState(false);
    const handleCardClick = () => setToggle(true);
    const handleCardClose = () => setToggle(false);

    return (
        <>
            <Burger onClick={handleCardClick} />
            <LoggedIn />
            <SideBar toggle={toggle} onClick={handleCardClose} />
        </>
    );
  }
  
  export default Navigation;

  