import React from 'react';
import SideBar from "../../Components/SideBar/sideBar";
import { Routes, Route, Outlet } from "react-router-dom";
import AvatarPage from "../../Pages/AvatarPage/AvatarPage";
import CardPage from "../../Pages/CardPage/CardPage";
import DialogPage from "../../Pages/DialogPage/DialogPage";
import SkeletonPage from "../../Pages/SkeletonPage/skeletonPage";
import TypographyPage from "../../Pages/TypeographyPage/TypographyPage";
import { Wrapper, Main, AsideFirst, Content, AsideSecond, Columns } from './mainLayout.style';
import Header from '../../Components/Common/Header/Header';
import Usage from '../../Pages/Usage/Usage';
import { IpropsTheme } from '../../@types/ThemeProps';

const MainLayout: React.FC<IpropsTheme> = (props:IpropsTheme) => {
    return (<>
        <Header {...props}/>
        <Wrapper>
            <Content>
                <Columns>
                    <AsideFirst>
                        <SideBar />
                    </AsideFirst>
                    <Outlet />
                    <Main>
                        <Routes>
                            <Route path="usage" element={<Usage />} />
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
