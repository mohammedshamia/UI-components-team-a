import React, { useEffect, useState } from 'react';
import ItemsSideBar from './ItemsSideBar';
import { SidebarNav, SidebarWrap, Icon } from './sideBar.style'
import menu from '../../Assets/menu.png'

const SideBar = () => {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <Icon src={menu} onClick={showSidebar} sidebar={sidebar}/>
            <SidebarNav sidebar={sidebar} onClick={()=>sidebar?null:showSidebar()}>
                <SidebarWrap>
                    <ItemsSideBar />
                </SidebarWrap>
            </SidebarNav></>
    );
}
export default SideBar;
