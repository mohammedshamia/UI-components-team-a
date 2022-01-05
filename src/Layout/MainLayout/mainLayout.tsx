import React from 'react';
import SideBar from "../../Components/SideBar/sideBar";
interface Props {
    children: JSX.Element[] | JSX.Element;
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <SideBar />
            <main >{children}</main>
        </>
    );
};

export default MainLayout;
