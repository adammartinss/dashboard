import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
    <TooltipCompnent content = {title} position='BottomCenter'>
        <button></button>
    </TooltipCompnent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <NavButton title='Menu' customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlinemenu />}/> 
  ) 
}

export default Navbar
 