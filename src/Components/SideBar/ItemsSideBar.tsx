import React from 'react';

const sideBarItems = [
    {
        title: "Typography",
        path: "/components/typography",
    },
    {
        title: "Card",
        path: "/components/card",
    }, {
        title: "Skelton",
        path: "/components/skelton",
    }, {
        title: "Dialog",
        path: "/components/dialog",
    }, {
        title: "Avatar",
        path: "/components/avatar",
    }
]
const ItemsSideBar = () => {
    return (
        <div>
  {sideBarItems.map((item, index) => {
              return <Menu item={item} key={index} />;
            })}
        </div>
    );
}

export default ItemsSideBar;
