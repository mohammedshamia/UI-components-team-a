import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    margin : 50px 100px;
    flex-direction: row;
    text-align:center;
    align-items: center;
    justify-content : space-between;
    
`


export const ContentLeft = styled.div`
text-align: left;
width : 50%;
max-width:60%;
justify-content: center;
margin:1rem
`;

export const ContentRight = styled.div`
background-color: ${(props) => props.theme.colors.secondary};
width : 50%;
max-width:70%;
justify-content: center;
flex-direction: row;
padding:2rem;
text-align: left;
border-radius: 10px;
@media (max-width: 768px) {
    display: none;
}
`;

export const Button = styled(Link)`
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
