import { ReactComponent as Logo } from "../../../Assets/Logo.svg";
import { ReactComponent as GitHubIcon } from "../../../Assets/GitHubIcon.svg";
import { ReactComponent as MoonIcon } from "../../../Assets/MoonIcon.svg";
import { ReactComponent as SunIcon } from "../../../Assets/SunIcon.svg";
import HeaderBox from "./HeaderBox.style";
import { Link } from "react-router-dom";
import HeaderFlexBox from "./HeaderFlexBox.style";
import BottonIcon from "../BottonIcon/Botton.style";
import Search from "../Search/Search";
import { IpropsTheme } from "../../../@types/ThemeProps";
import React from "react";

export default class Header extends React.PureComponent<IpropsTheme> {
  render() {
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
          <BottonIcon onClick={this.props.ToggelTheme}>
            {this.props.theme === "light" ? <MoonIcon /> : <SunIcon />}
          </BottonIcon>
        </HeaderFlexBox>
      </HeaderBox>
    );
  }
}
