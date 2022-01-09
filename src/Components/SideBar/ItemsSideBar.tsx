import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, SidebarLink } from './sideBar.style'

const sideBarItems = [
    {
        title: "usage",
        path: "/components/usage",
    },
    {
        title: "typography",
        path: "/components/typography",
    },
    {
        title: "card",
        path: "/components/card",
    }, {
        title: "skeleton",
        path: "/components/skeleton",
    }, {
        title: "dialog",
        path: "/components/dialog",
    }, {
        title: "avatar",
        path: "/components/avatar",
    },
  
    
]
const ItemsSideBar = () => {
    const [title, setTitle] = useState<string | undefined>('');
    const { pathname } = useLocation();
    useEffect(() => {
        setTitle(pathname.split('/')[2])
    }, [pathname]);
    return (
        <div>
            {sideBarItems.map((item, index: number) => {
                return <Menu key={index} >
                    <SidebarLink
                        to={item.path} style={title == item.title ? {
                            color: 'rgb(0, 114, 229)',
                            background: '#F0F7FF',
                            borderRadius: '.5rem'
                        } : {}}
                    >
                        {item.title}
                    </SidebarLink>
                </Menu>;
            })}
        </div>
    );
}

export default ItemsSideBar;
