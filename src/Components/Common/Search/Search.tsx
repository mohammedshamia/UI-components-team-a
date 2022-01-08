import { ReactComponent as SearchIcon } from "../../../Assets/SearchIcon.svg";
import { Link } from "react-router-dom";
import { Input, Item, Lable, SearchBox } from "./Search.style";
import { ReactNode } from "react";
import { useState } from "react";

const items: Array<{ name: string; path: string }> = [
  { name: "avatar", path: "/components/avatar" },
  { name: "card", path: "/components/card" },
  { name: "dialog", path: "/components/dialog" },
  { name: "skeleton", path: "/components/skeleton" },
  { name: "typography", path: "/components/typography" },
];

export default function Search(): JSX.Element {
  let [value, setValue] = useState("");

  let handleChange = (e: any) => {
    let val: string = e.target.value;
    setValue(val);
  };

  let filter = (words: string): ReactNode => {
    let word = words.trim().toLowerCase();

    if (word === "") {
      return items.map((item) => {
        return (
          <Item as={Link} to={item.path} key={item.name}>
            {item.name}
          </Item>
        );
      });
    }

    if (word !== "") {
      return items.map((item) => {
        if (item.name.includes(word)) {
          return (
            <Item as={Link} to={item.path} key={item.name}>
              {item.name}
            </Item>
          );
        }
        return null;
      });
    }
  };

  return (
    <Lable>
      <SearchIcon />
      <Input type="text" placeholder="Search..." onChange={handleChange} />
      <SearchBox>
        Include: {value} {filter(value)}
      </SearchBox>
    </Lable>
  );
}
