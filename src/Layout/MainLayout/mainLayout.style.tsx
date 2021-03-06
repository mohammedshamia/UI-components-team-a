import styled from 'styled-components';

export const Wrapper = styled.div`
display :flex;
flex-direction: column;
color:${(props)=>props.theme.textColor.primary};
background-color: ${(props) => props.theme.colors.primary};

width:100%;
    height:100%;
    box-sizing:border-box;


`

export const Content = styled.div`
display :flex;
flex:1;
box-sizing:border-box;

`
export const Columns = styled.div`
display :flex;
flex:1;
box-sizing:border-box;

`
export const Main = styled.div`
margin-top:5rem;
flex:3;
order:2;
margin-top:5rem;
text-align:left;
box-sizing:border-box;
margin-right:20rem;


`
export const AsideFirst = styled.div`
flex:1.2;
order:1;

@media (max-width: 768px) {
    flex:.5;
}

`
export const AsideSecond = styled.div`
margin-top : 100px;
position: fixed;
right: 0;
top:0;
display : flex;
flex-direction: column ;
flex:2;
order:3;
width:18rem;
@media (max-width: 768px) {
    display: none;
    width:0;

}
`