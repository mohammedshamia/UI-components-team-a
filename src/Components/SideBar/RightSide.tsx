import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { IpropsTheme } from "../../@types/ThemeProps";
import components from '../../Assets/Components.json';
import { MenuLinkA, SidebarWrap } from "./sideBar.style";
import {Link} from 'react-scroll';
import { AsideSecond } from "../../Layout/MainLayout/mainLayout.style";
import Typography from "../Typograhy/typography";


const RightSide = () => {
    const { pathname } = useLocation();
    const [title, setTitle] = useState<string | undefined>('');
    const [contentPage, setContentPage] = useState<string [] | undefined>([]);
    const [contents, setContents] = useState(components);

    // console.log(contents.find((o, i) => {
    //     if (o.title === title) {
    //         return contents[i].Contents; // stop searching
    //     }
    // }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function findContents () : string[] | undefined {
        for(let i =0 ; i< contents.length ; i++){
            if(contents[i].title === title){
                return contents[i].Contents;
            }
        }
    }
    //console.log(findContents())

    //console.log(contents.findIndex(contentA => contentA.title === title))
    useEffect(() => {
        setTitle(pathname.split('/')[2])
        setContentPage(findContents())
        console.log(contentPage)
    }, [contentPage, findContents, pathname]);
    
    console.log("ahmad saleh" + contentPage)
    //console.log(contents.filter(function(item){
    //    return item.title === title;         
    //}));
    //console.log(contents[1].Contents);
    return(
        <AsideSecond>
            {
                contentPage?.map((cont, index)=>(
                    <SidebarWrap>
                        <Typography variant="span">
                       <MenuLinkA to={cont}>{cont}</MenuLinkA>
                       </Typography>
                    </SidebarWrap>
                ))
            }
        </AsideSecond>
    )
}

export default RightSide