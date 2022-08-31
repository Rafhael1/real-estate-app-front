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
	margin: 0;
`;

export const Images = styled.img<IslideStyles>`
	width: ${(props) => props.imageDimension?.width || '350px'};
	height: ${(props) => props.imageDimension?.height || '250px'};
	border-radius: 12px;
	position: relative;
	user-drag: none;
	user-select: none;
	margin: 0px;
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
	@media (max-width: 768px) {
		margin: -40% 10%;
	}
	@media (min-width: 800px) {
		margin: -40% 10%;
	}
	left: -15px;
	transition: 0.8s;
	z-index: 1;
	${SliderContainer}:hover & {
		filter: drop-shadow(0px 0px 6px #313131);
		color: #ffffff;
		opacity: 1;
	}
`;
