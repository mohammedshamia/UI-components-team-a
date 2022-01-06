import { ReactComponent as Logo } from "./../../Assets/Logo.svg";
import { ReactComponent as GitHubIcon } from "./../../Assets/GitHubIcon.svg";
import { ReactComponent as MoonIcon } from "./../../Assets/MoonIcon.svg";
import { ReactComponent as SunIcon } from "./../../Assets/SunIcon.svg";
import HeaderBox from "./HeaderBox.style";
import { Link } from "react-router-dom";
import HeaderFlexBox from "./HeaderFlexBox.style";
import { useState } from "react";
import BottonIcon from "../BottonIcon/Botton.style";
import Search from "../Search/Search";

export default function Header(): JSX.Element {
  let [theme, setTheme] = useState(false);
  let handelTheme = () => {
    let value = theme;
    setTheme(!value);
  };
  return (
    <HeaderBox>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderFlexBox>
        <Search />
        <BottonIcon
          as="a"
          href="https://github.com/mohammedshamia/UI-components-team-a"
        >
          <GitHubIcon />
        </BottonIcon>
        <BottonIcon onClick={handelTheme}>
          {theme ? <MoonIcon /> : <SunIcon />}
        </BottonIcon>
      </HeaderFlexBox>
    </HeaderBox>
  );
}
