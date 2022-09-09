import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

interface Props {
	path: string;
	subtitle: string;
	title: string;
	img: string;
}

const Wrapper = styled.div`
	height: 100%;
	padding: 20px 100px 20px 30px;
	position: relative;
	cursor: pointer;
	&:hover {
		& .content__img {
			&:after {
				background-color: transparent;
			}
		}
	}
`;
const Img = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	& img {
		position: absolute;
		top: 0;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		background-color: #0000006e;
		width: 100%;
		height: 100%;
		transition: all 0.3s ease 0s;
	}
`;
const Subtitle = styled.p`
	text-transform: uppercase;
	font-size: 8px;
	padding-right: 50px;
	color: #fff;
	margin: 0 0 10px 0;
	position: relative;
`;
const Title = styled.h4`
	text-transform: none;
	font-size: 20px;
	line-height: 1.1;
	color: #e7e7e7;
	position: relative;
`;
const HowToPreview: React.FC<Props> = ({ path, subtitle, title, img }) => {
	const navigate = useNavigate();

	return (
		<Wrapper className="slick-content" onClick={() => navigate(path)}>
			{img && (
				<Img className="content__img">
					<img src={img} alt={subtitle + " " + title} />
				</Img>
			)}
			<Subtitle>{subtitle}</Subtitle>
			<Title>{title}</Title>
		</Wrapper>
	);
};

export default HowToPreview;
