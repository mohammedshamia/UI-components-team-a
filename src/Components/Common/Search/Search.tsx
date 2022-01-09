import { ReactComponent as SearchIcon } from "../../../Assets/SearchIcon.svg";
import { Link } from "react-router-dom";
import { Input, Item, Lable, SearchBox } from "./Search.style";
import { ReactNode, useCallback } from "react";
import { useState } from "react";
import { sideBarItems } from "../../SideBar/ItemsSideBar";

const items: Array<{ title: string; path: string }> = sideBarItems;

export default function Search(): JSX.Element {
  let [value, setValue] = useState<string>("");

  let handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let val: string = e.currentTarget.value.trim().toLowerCase();
    setValue(val);
  };

  let filter = useCallback((words: string): ReactNode => {
    let word = words;
    if (word === "") {
      return items.map((item) => {
        return (
          <Item as={Link} to={item.path} key={item.title}>
            {item.title}
          </Item>
        );
      });
    }

    if (word !== "") {
      return items.map((item) => {
        if (item.title.includes(word)) {
          return (
            <Item as={Link} to={item.path} key={item.title}>
              {item.title}
            </Item>
          );
        }
        return null;
      });
    }
  }, []);

  return (
    <Lable>
      <SearchIcon />
      <Input type="text" placeholder="Search..." onChange={handleChange} />
      <SearchBox>{filter(value)}</SearchBox>
    </Lable>
  );
}
