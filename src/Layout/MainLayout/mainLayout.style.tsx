import styled from 'styled-components';

export const Wrapper = styled.div`
display :flex;
flex-direction: column;
color:${(props)=>props.theme.textColor.primary};
width:100%
`

export const Content = styled.div`
display :flex;
flex:1
`
export const Columns = styled.div`
display :flex;
flex:1
`
export const Main = styled.div`
margin:1rem;
flex:3;
order:2
`
export const AsideFirst = styled.div`
flex:1.2;
order:1;
`
export const AsideSecond = styled.div`
margin:1rem;
flex:1;
order:3;
@media (max-width: 768px) {
    display: none;
}
`