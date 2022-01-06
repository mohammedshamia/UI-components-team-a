import React from 'react';
import SideBar from "../../Components/SideBar/sideBar";
import { Routes, Route, Outlet } from "react-router-dom";
import AvatarPage from "../../Pages/AvatarPage/avatarPage";
import CardPage from "../../Pages/CardPage/cardPage";
import DialogPage from "../../Pages/DialogPage/dialogPage";
import SkeletonPage from "../../Pages/SkeletonPage/skeletonPage";
import TypographyPage from "../../Pages/TypographyPage/typographyPage";
import { Wrapper, Main, AsideFirst, Content, AsideSecond, Columns } from './mainLayout.style';

const MainLayout: React.FC = () => {
    return (<>
        <Wrapper>
            <Content>
                <Columns>
                    <AsideFirst>
                        <SideBar />
                    </AsideFirst>
                    <Outlet />
                    <Main>
                        <Routes>
                            <Route path="avatar" element={<AvatarPage />} />
                            <Route path="dialog" element={<DialogPage />} />
                            <Route path="card" element={<CardPage />} />
                            <Route path="skeleton" element={<SkeletonPage />} />
                            <Route path="typography" element={<TypographyPage />} />
                        </Routes></Main>
                    <AsideSecond>Contents</AsideSecond>
                </Columns>
            </Content>
        </Wrapper>
    </>
    );
};

export default MainLayout;
