import styled, { keyframes } from 'styled-components';

interface IslideStyles {
	top?: string;
	float?: string;
	position?: string;
	arrowPosition?: string;
	imageDimension?: {
		width?: string;
		height?: string;
	};
}

const rotate = keyframes`
  from {
    opacity: 75%;
  }
  to {
    opacity: 100%;
  }
`;

export const SliderContainer = styled.div<IslideStyles>`
	padding: 0;
`;

export const Images = styled.img<IslideStyles>`
	width: ${(props) => props.imageDimension?.width || '350px'};
	height: ${(props) => props.imageDimension?.height || '250px'};
	position: relative;
	user-drag: none;
	user-select: none;
	margin: -8px;
	padding: 0;
	z-index: 0;
	animation: ${rotate} 0.4s linear 1;
`;

export const SlideArrow = styled.button<IslideStyles>`
	position: relative;
	opacity: 0;
	padding: 0;
	width: 5px;
	height: 10px;
	float: ${(props) => props.float};
	border: none;
	background: none;
	color: #e9e9e9;
	border-radius: 25px;
	cursor: pointer;
	margin: -42% 12%;
	left: -15px;
	transition: 0.8s;
	z-index: 1;
	${SliderContainer}:hover & {
		filter: drop-shadow(0px 0px 6px #313131);
		color: #ffffff;
		opacity: 1;
	}
`;
