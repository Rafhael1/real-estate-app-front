import  styled, { keyframes }  from 'styled-components'

interface IslideArrow {
    topDistance: string,
    float: string,
    position: string,
}

const rotate = keyframes`
from {
      
        opacity: 70%;
    }
    to {
 
        opacity: 100%;
    }
`

export const SlidersContainer = styled.div`
    width: ${props => props.width || '350px'};
    height:  ${props => props.height || '250px'};
`

export const Images = styled.img`
    width: 350px;
    height: 250px;
    position: absolute;
    animation: ${rotate} 0.5s ease-in-out 1;
`

export const SlideArrow = styled.button`
    position: ${(props: IslideArrow) => props.position};
    top: ${(props: IslideArrow) => props.topDistance ||  '100px'};
    float: ${(props: IslideArrow) => props.float};
    border: none;
    background: none;
    color: whitesmoke;
    cursor: pointer;
    padding: 2px;
    justify-content: center;
    transition: 0.5s;
    z-index: 5;
    :hover {
        filter: drop-shadow(2px 2px 2px black);
        color: white
    }
`
