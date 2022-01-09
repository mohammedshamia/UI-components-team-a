import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(1,2,2,0.41);
  position: fixed;
  display: block;
  overflow: auto;
  z-index: 40;
  top:0; 
  left: 0;
  right: 0;
  bottom: 0;
`;
export const Wrapper= styled.div`  
 z-index: 45;
   background-color:rgb(18, 18, 18);
   color: rgb(255, 255, 255);
   transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px, rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
    background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
    margin: 15% auto ;
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 64px);
    padding: 10px;
    width:40% ;
`;
