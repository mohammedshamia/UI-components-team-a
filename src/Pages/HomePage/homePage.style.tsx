import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    flex-direction: row;
    align-items: center;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ContentLeft = styled.div`
text-align: left;
max-width:500px;
padding:1rem;
margin:1rem
`;

export const ContentRight = styled.div`
background-color: #F3F6F9;
max-width:600px;
margin:1rem;
flex-direction: row;
align-items: center;
text-align:center;
padding:1rem;
text-align: left;
border-radius: 10px;
@media (max-width: 768px) {
    display: none;
}
`;

export const Button =styled(Link)`
display: flex;
box-shadow: none;
background-color: #007FFF;
color: #fff;
padding: 1.1rem 1rem;
align-items: center;
list-style: none;
width:25%;
text-decoration: none;
font-size: 16px;
border-radius: .6rem; 
@media (max-width: 768px) {
    width:40%;
}
&:hover {
  background:#5468ff;
}
`
