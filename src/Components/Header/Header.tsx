import { ReactComponent as Logo } from "./../../Assets/Logo.svg";
import { ReactComponent as GitHubIcon } from "./../../Assets/GitHubIcon.svg";
import { ReactComponent as MoonIcon } from "./../../Assets/MoonIcon.svg";
import { ReactComponent as SunIcon } from "./../../Assets/SunIcon.svg";
import HeaderBox from "./HeaderBox.style";
import { Link } from "react-router-dom";
import HeaderFlexBox from "./HeaderFlexBox.style";
import { useContext } from "react";
import BottonIcon from "../BottonIcon/Botton.style";
import Search from "../Search/Search";
import ContextTheme from "../../ContextAPI/themeContext";

export default function Header(): JSX.Element {
  let theme = useContext(ContextTheme);
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
        <BottonIcon onClick={theme?.toggelTheme}>
          {theme?.dark ? <MoonIcon /> : <SunIcon />}
        </BottonIcon>
      </HeaderFlexBox>
    </HeaderBox>
  );
}
