import React from 'react';
import logo from './logo.svg';
import './App.css';
import AvatarGroup from './Components/AvatarGroup/AvatarGroup';
import { AvatarProps } from './@types/AvatarTypes/AvatarProps';
import { Avatar } from './Components/Avatar/Avatar.style';
import {SingleAvatar} from './Components/Avatar/Avatar';
import ImageA from './aa.jpg';
function App() {
  return (
    <>
    <SingleAvatar kind='circular' avatar={<img src={ImageA} alt='lkf' />} hidden= {true} src={ImageA} />
      <AvatarGroup kind={'circular'} avatars={['','','','']} displayAllOnHover={true} max={1} size={60} />
    <AvatarGroup displayAllOnHover={true} avatars={['ah m','Ahmad Saleh','a o']} kind='circular' max={1} size={60} uppercase={true} />
    </>
  );
}

export default App;
